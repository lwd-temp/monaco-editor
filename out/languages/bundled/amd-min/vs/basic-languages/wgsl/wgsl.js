/*! For license information please see wgsl.js.LICENSE.txt */
"use strict";define("vs/basic-languages/wgsl/wgsl",["require","require"],(t=>(()=>{var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,a={};((n,e)=>{for(var r in e)t(n,r,{get:e[r],enumerable:!0})})(a,{conf:()=>o,language:()=>l});var o={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"}]};function i(t){let n=[],e=t.split(/\t+|\r+|\n+| +/);for(let t=0;t<e.length;++t)e[t].length>0&&n.push(e[t]);return n}var s,c=/[_\p{XID_Start}]\p{XID_Continue}*/u,m="variable.predefined",l={tokenPostfix:".wgsl",defaultToken:"invalid",unicode:!0,atoms:i("true false"),keywords:i("\n\t\t\t  alias\n\t\t\t  break\n\t\t\t  case\n\t\t\t  const\n\t\t\t  const_assert\n\t\t\t  continue\n\t\t\t  continuing\n\t\t\t  default\n\t\t\t  diagnostic\n\t\t\t  discard\n\t\t\t  else\n\t\t\t  enable\n\t\t\t  fn\n\t\t\t  for\n\t\t\t  if\n\t\t\t  let\n\t\t\t  loop\n\t\t\t  override\n\t\t\t  requires\n\t\t\t  return\n\t\t\t  struct\n\t\t\t  switch\n\t\t\t  var\n\t\t\t  while\n\t\t\t  "),reserved:i("\n\t\t\t  NULL\n\t\t\t  Self\n\t\t\t  abstract\n\t\t\t  active\n\t\t\t  alignas\n\t\t\t  alignof\n\t\t\t  as\n\t\t\t  asm\n\t\t\t  asm_fragment\n\t\t\t  async\n\t\t\t  attribute\n\t\t\t  auto\n\t\t\t  await\n\t\t\t  become\n\t\t\t  binding_array\n\t\t\t  cast\n\t\t\t  catch\n\t\t\t  class\n\t\t\t  co_await\n\t\t\t  co_return\n\t\t\t  co_yield\n\t\t\t  coherent\n\t\t\t  column_major\n\t\t\t  common\n\t\t\t  compile\n\t\t\t  compile_fragment\n\t\t\t  concept\n\t\t\t  const_cast\n\t\t\t  consteval\n\t\t\t  constexpr\n\t\t\t  constinit\n\t\t\t  crate\n\t\t\t  debugger\n\t\t\t  decltype\n\t\t\t  delete\n\t\t\t  demote\n\t\t\t  demote_to_helper\n\t\t\t  do\n\t\t\t  dynamic_cast\n\t\t\t  enum\n\t\t\t  explicit\n\t\t\t  export\n\t\t\t  extends\n\t\t\t  extern\n\t\t\t  external\n\t\t\t  fallthrough\n\t\t\t  filter\n\t\t\t  final\n\t\t\t  finally\n\t\t\t  friend\n\t\t\t  from\n\t\t\t  fxgroup\n\t\t\t  get\n\t\t\t  goto\n\t\t\t  groupshared\n\t\t\t  highp\n\t\t\t  impl\n\t\t\t  implements\n\t\t\t  import\n\t\t\t  inline\n\t\t\t  instanceof\n\t\t\t  interface\n\t\t\t  layout\n\t\t\t  lowp\n\t\t\t  macro\n\t\t\t  macro_rules\n\t\t\t  match\n\t\t\t  mediump\n\t\t\t  meta\n\t\t\t  mod\n\t\t\t  module\n\t\t\t  move\n\t\t\t  mut\n\t\t\t  mutable\n\t\t\t  namespace\n\t\t\t  new\n\t\t\t  nil\n\t\t\t  noexcept\n\t\t\t  noinline\n\t\t\t  nointerpolation\n\t\t\t  noperspective\n\t\t\t  null\n\t\t\t  nullptr\n\t\t\t  of\n\t\t\t  operator\n\t\t\t  package\n\t\t\t  packoffset\n\t\t\t  partition\n\t\t\t  pass\n\t\t\t  patch\n\t\t\t  pixelfragment\n\t\t\t  precise\n\t\t\t  precision\n\t\t\t  premerge\n\t\t\t  priv\n\t\t\t  protected\n\t\t\t  pub\n\t\t\t  public\n\t\t\t  readonly\n\t\t\t  ref\n\t\t\t  regardless\n\t\t\t  register\n\t\t\t  reinterpret_cast\n\t\t\t  require\n\t\t\t  resource\n\t\t\t  restrict\n\t\t\t  self\n\t\t\t  set\n\t\t\t  shared\n\t\t\t  sizeof\n\t\t\t  smooth\n\t\t\t  snorm\n\t\t\t  static\n\t\t\t  static_assert\n\t\t\t  static_cast\n\t\t\t  std\n\t\t\t  subroutine\n\t\t\t  super\n\t\t\t  target\n\t\t\t  template\n\t\t\t  this\n\t\t\t  thread_local\n\t\t\t  throw\n\t\t\t  trait\n\t\t\t  try\n\t\t\t  type\n\t\t\t  typedef\n\t\t\t  typeid\n\t\t\t  typename\n\t\t\t  typeof\n\t\t\t  union\n\t\t\t  unless\n\t\t\t  unorm\n\t\t\t  unsafe\n\t\t\t  unsized\n\t\t\t  use\n\t\t\t  using\n\t\t\t  varying\n\t\t\t  virtual\n\t\t\t  volatile\n\t\t\t  wgsl\n\t\t\t  where\n\t\t\t  with\n\t\t\t  writeonly\n\t\t\t  yield\n\t\t\t  "),predeclared_enums:i("\n\t\tread write read_write\n\t\tfunction private workgroup uniform storage\n\t\tperspective linear flat\n\t\tcenter centroid sample\n\t\tvertex_index instance_index position front_facing frag_depth\n\t\t\tlocal_invocation_id local_invocation_index\n\t\t\tglobal_invocation_id workgroup_id num_workgroups\n\t\t\tsample_index sample_mask\n\t\trgba8unorm\n\t\trgba8snorm\n\t\trgba8uint\n\t\trgba8sint\n\t\trgba16uint\n\t\trgba16sint\n\t\trgba16float\n\t\tr32uint\n\t\tr32sint\n\t\tr32float\n\t\trg32uint\n\t\trg32sint\n\t\trg32float\n\t\trgba32uint\n\t\trgba32sint\n\t\trgba32float\n\t\tbgra8unorm\n"),predeclared_types:i("\n\t\tbool\n\t\tf16\n\t\tf32\n\t\ti32\n\t\tsampler sampler_comparison\n\t\ttexture_depth_2d\n\t\ttexture_depth_2d_array\n\t\ttexture_depth_cube\n\t\ttexture_depth_cube_array\n\t\ttexture_depth_multisampled_2d\n\t\ttexture_external\n\t\ttexture_external\n\t\tu32\n\t\t"),predeclared_type_generators:i("\n\t\tarray\n\t\tatomic\n\t\tmat2x2\n\t\tmat2x3\n\t\tmat2x4\n\t\tmat3x2\n\t\tmat3x3\n\t\tmat3x4\n\t\tmat4x2\n\t\tmat4x3\n\t\tmat4x4\n\t\tptr\n\t\ttexture_1d\n\t\ttexture_2d\n\t\ttexture_2d_array\n\t\ttexture_3d\n\t\ttexture_cube\n\t\ttexture_cube_array\n\t\ttexture_multisampled_2d\n\t\ttexture_storage_1d\n\t\ttexture_storage_2d\n\t\ttexture_storage_2d_array\n\t\ttexture_storage_3d\n\t\tvec2\n\t\tvec3\n\t\tvec4\n\t\t"),predeclared_type_aliases:i("\n\t\tvec2i vec3i vec4i\n\t\tvec2u vec3u vec4u\n\t\tvec2f vec3f vec4f\n\t\tvec2h vec3h vec4h\n\t\tmat2x2f mat2x3f mat2x4f\n\t\tmat3x2f mat3x3f mat3x4f\n\t\tmat4x2f mat4x3f mat4x4f\n\t\tmat2x2h mat2x3h mat2x4h\n\t\tmat3x2h mat3x3h mat3x4h\n\t\tmat4x2h mat4x3h mat4x4h\n\t\t"),predeclared_intrinsics:i("\n  bitcast all any select arrayLength abs acos acosh asin asinh atan atanh atan2\n  ceil clamp cos cosh countLeadingZeros countOneBits countTrailingZeros cross\n  degrees determinant distance dot exp exp2 extractBits faceForward firstLeadingBit\n  firstTrailingBit floor fma fract frexp inverseBits inverseSqrt ldexp length\n  log log2 max min mix modf normalize pow quantizeToF16 radians reflect refract\n  reverseBits round saturate sign sin sinh smoothstep sqrt step tan tanh transpose\n  trunc dpdx dpdxCoarse dpdxFine dpdy dpdyCoarse dpdyFine fwidth fwidthCoarse fwidthFine\n  textureDimensions textureGather textureGatherCompare textureLoad textureNumLayers\n  textureNumLevels textureNumSamples textureSample textureSampleBias textureSampleCompare\n  textureSampleCompareLevel textureSampleGrad textureSampleLevel textureSampleBaseClampToEdge\n  textureStore atomicLoad atomicStore atomicAdd atomicSub atomicMax atomicMin\n  atomicAnd atomicOr atomicXor atomicExchange atomicCompareExchangeWeak pack4x8snorm\n  pack4x8unorm pack2x16snorm pack2x16unorm pack2x16float unpack4x8snorm unpack4x8unorm\n  unpack2x16snorm unpack2x16unorm unpack2x16float storageBarrier workgroupBarrier\n  workgroupUniformLoad\n"),operators:i("\n\t\t\t\t\t &\n\t\t\t\t\t &&\n\t\t\t\t\t ->\n\t\t\t\t\t /\n\t\t\t\t\t =\n\t\t\t\t\t ==\n\t\t\t\t\t !=\n\t\t\t\t\t >\n\t\t\t\t\t >=\n\t\t\t\t\t <\n\t\t\t\t\t <=\n\t\t\t\t\t %\n\t\t\t\t\t -\n\t\t\t\t\t --\n\t\t\t\t\t +\n\t\t\t\t\t ++\n\t\t\t\t\t |\n\t\t\t\t\t ||\n\t\t\t\t\t *\n\t\t\t\t\t <<\n\t\t\t\t\t >>\n\t\t\t\t\t +=\n\t\t\t\t\t -=\n\t\t\t\t\t *=\n\t\t\t\t\t /=\n\t\t\t\t\t %=\n\t\t\t\t\t &=\n\t\t\t\t\t |=\n\t\t\t\t\t ^=\n\t\t\t\t\t >>=\n\t\t\t\t\t <<=\n\t\t\t\t\t "),symbols:/[!%&*+\-\.\/:;<=>^|_~]+/,tokenizer:{root:[[/enable|requires|diagnostic/,"keyword","@directive"],[c,{cases:{"@atoms":m,"@keywords":"keyword","@reserved":"invalid","@predeclared_enums":m,"@predeclared_types":m,"@predeclared_type_generators":m,"@predeclared_type_aliases":m,"@predeclared_intrinsics":m,"@default":"identifier"}}],{include:"@commentOrSpace"},{include:"@numbers"},[/;:\./,"delimiter"],[/,/,"delimiter"],[/[{}()\[\]]/,"@brackets"],["@","annotation","@attribute"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/./,"invalid"]],commentOrSpace:[[/\s+/,"white"],[/\/\*/,"comment","@blockComment"],[/\/\/.*$/,"comment"]],blockComment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],attribute:[{include:"@commentOrSpace"},[/\w+/,"annotation","@pop"]],directive:[{include:"@commentOrSpace"},[/[()]/,"@brackets"],[/,/,"delimiter"],[c,"meta.content"],[/;/,"delimiter","@pop"]],numbers:[[/0[fh]/,"number.float"],[/[1-9][0-9]*[fh]/,"number.float"],[/[0-9]*\.[0-9]+([eE][+-]?[0-9]+)?[fh]?/,"number.float"],[/[0-9]+\.[0-9]*([eE][+-]?[0-9]+)?[fh]?/,"number.float"],[/[0-9]+[eE][+-]?[0-9]+[fh]?/,"number.float"],[/0[xX][0-9a-fA-F]*\.[0-9a-fA-F]+(?:[pP][+-]?[0-9]+[fh]?)?/,"number.hex"],[/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*(?:[pP][+-]?[0-9]+[fh]?)?/,"number.hex"],[/0[xX][0-9a-fA-F]+[pP][+-]?[0-9]+[fh]?/,"number.hex"],[/0[xX][0-9a-fA-F]+[iu]?/,"number.hex"],[/[1-9][0-9]*[iu]?/,"number"],[/0[iu]?/,"number"]]}};return s=a,((a,o,i,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let i of e(o))!r.call(a,i)&&undefined!==i&&t(a,i,{get:()=>o[i],enumerable:!(s=n(o,i))||s.enumerable});return a})(t({},"__esModule",{value:!0}),s)})()));