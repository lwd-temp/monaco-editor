/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import Thenable = monaco.Thenable;
import Promise = monaco.Promise;
import IWorkerContext = monaco.worker.IWorkerContext;

import * as cssService from 'vscode-css-languageservice';
import * as ls from 'vscode-languageserver-types';

export class CSSWorker {

	// --- model sync -----------------------

	private _ctx: IWorkerContext;
	private _languageService: cssService.LanguageService;
	private _languageSettings: cssService.LanguageSettings;
	private _languageId: string;

	constructor(ctx: IWorkerContext, createData: ICreateData) {
		this._ctx = ctx;
		this._languageSettings = createData.languageSettings;
		this._languageId = createData.languageId;
		switch (this._languageId) {
			case 'css':
				this._languageService = cssService.getCSSLanguageService();
				break;
			case 'less':
				this._languageService = cssService.getLESSLanguageService();
				break;
			case 'scss':
				this._languageService = cssService.getSCSSLanguageService();
				break;
			default:
				throw new Error('Invalid language id: ' + this._languageId);
		}
		this._languageService.configure(this._languageSettings);
	}

	// --- language service host ---------------

	doValidation(uri: string): Thenable<ls.Diagnostic[]> {
		let document = this._getTextDocument(uri);
		if (document) {
			let stylesheet = this._languageService.parseStylesheet(document);
			let diagnostics = this._languageService.doValidation(document, stylesheet);
			return Promise.as(diagnostics)
		}
		return Promise.as([]);
	}
	doComplete(uri: string, position: ls.Position): Thenable<ls.CompletionList> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let completions = this._languageService.doComplete(document, position, stylesheet);
		return Promise.as(completions);
	}
	doHover(uri: string, position: ls.Position): Thenable<ls.Hover> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let hover = this._languageService.doHover(document, position, stylesheet);
		return Promise.as(hover);
	}
	findDefinition(uri: string, position: ls.Position): Thenable<ls.Location> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let definition = this._languageService.findDefinition(document, position, stylesheet);
		return Promise.as(definition);
	}
	findReferences(uri: string, position: ls.Position): Thenable<ls.Location[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let references = this._languageService.findReferences(document, position, stylesheet);
		return Promise.as(references);
	}
	findDocumentHighlights(uri: string, position: ls.Position): Thenable<ls.DocumentHighlight[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let highlights = this._languageService.findDocumentHighlights(document, position, stylesheet);
		return Promise.as(highlights);
	}
	findDocumentSymbols(uri: string): Thenable<ls.SymbolInformation[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let symbols = this._languageService.findDocumentSymbols(document, stylesheet);
		return Promise.as(symbols);
	}
	doCodeActions(uri: string, range: ls.Range, context: ls.CodeActionContext): Thenable<ls.Command[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let actions = this._languageService.doCodeActions(document, range, context, stylesheet);
		return Promise.as(actions);
	}
	findDocumentColors(uri: string): Thenable<ls.ColorInformation[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let colorSymbols = this._languageService.findDocumentColors(document, stylesheet);
		return Promise.as(colorSymbols);
	}
	getColorPresentations(uri: string, color: ls.Color, range: ls.Range): Thenable<ls.ColorPresentation[]> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let colorPresentations = this._languageService.getColorPresentations(document, stylesheet, color, range);
		return Promise.as(colorPresentations);
	}
	provideFoldingRanges(uri: string, context?: { rangeLimit?: number; }): Thenable<ls.FoldingRange[]> {
		let document = this._getTextDocument(uri);
		let ranges = this._languageService.getFoldingRanges(document, context);
		return Promise.as(ranges);
	}
	doRename(uri: string, position: ls.Position, newName: string): Thenable<ls.WorkspaceEdit> {
		let document = this._getTextDocument(uri);
		let stylesheet = this._languageService.parseStylesheet(document);
		let renames = this._languageService.doRename(document, position, newName, stylesheet);
		return Promise.as(renames);
	}
	private _getTextDocument(uri: string): ls.TextDocument {
		let models = this._ctx.getMirrorModels();
		for (let model of models) {
			if (model.uri.toString() === uri) {
				return ls.TextDocument.create(uri, this._languageId, model.version, model.getValue());
			}
		}
		return null;
	}
}

export interface ICreateData {
	languageId: string;
	languageSettings: cssService.LanguageSettings;
}

export function create(ctx: IWorkerContext, createData: ICreateData): CSSWorker {
	return new CSSWorker(ctx, createData);
}
