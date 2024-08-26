import { useRef, useEffect } from 'react'
import Title from '../components/Title'

const cssConcepts = [
  {
    name: '元素选择符',
    sub: 'Element Selectors',
    children: [
      { name: 'element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Element_Selectors' },
      { name: 'type', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors' },
      { name: 'universal', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors' },
    ],
  },
  {
    name: '关系选择符',
    sub: 'Relationship Selectors',
    children: [
      { name: 'descendant', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors' },
      { name: 'child', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors' },
      { name: 'adjacent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors' },
      { name: 'general', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors' },
    ],
  },
  {
    name: '属性选择符',
    sub: 'Attribute Selectors',
    children: [
      { name: 'attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors' },
      { name: 'exact', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#exact_match' },
      { name: 'prefix', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#prefix_match' },
      { name: 'suffix', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#suffix_match' },
      { name: 'contains', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#contains' },
    ],
  },
  {
    name: '伪对象选择符',
    sub: 'Pseudo-Object Selectors',
    children: [
      { name: 'before', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before' },
      { name: 'after', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::after' },
      { name: 'first-line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line' },
      { name: 'first-letter', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter' },
    ],
  },
  {
    name: '伪类选择符',
    sub: 'Pseudo-Classes Selectors',
    children: [
      { name: 'hover', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover' },
      { name: 'focus', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus' },
      { name: 'active', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:active' },
      { name: 'visited', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited' },
      { name: 'nth-child', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child' },
      { name: 'nth-of-type', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type' },
    ],
  },
  {
    name: '布局',
    sub: 'Layout Methods',
    children: [
      { name: 'display', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display' },
      { name: 'float', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float' },
      { name: 'clear', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear' },
      { name: 'overflow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow' },
    ],
  },
  {
    name: '定位',
    sub: 'Positioning Methods',
    children: [
      { name: 'position', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position' },
      { name: 'top', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/top' },
      { name: 'right', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/right' },
      { name: 'bottom', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom' },
      { name: 'left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/left' },
      { name: 'z-index', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index' },
    ],
  },
  {
    name: '伸缩盒',
    sub: 'Flexible Box',
    children: [
      { name: 'display: flex', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex' },
      { name: 'flex-direction', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction' },
      { name: 'flex-wrap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap' },
      { name: 'flex-flow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow' },
      { name: 'justify-content', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content' },
      { name: 'align-items', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items' },
      { name: 'align-content', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-content' },
      { name: 'align-self', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self' },
      { name: 'flex-grow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow' },
      { name: 'flex-shrink', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink' },
      { name: 'flex-basis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis' },
      { name: 'flex', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex' },
    ],
  },
  {
    name: '多列',
    sub: 'Multi-column',
    children: [
      { name: 'column-count', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-count' },
      { name: 'column-width', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-width' },
      { name: 'column-gap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap' },
      { name: 'column-rule', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule' },
      { name: 'column-span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-span' },
    ],
  },
  {
    name: '尺寸',
    sub: 'Dimension',
    children: [
      { name: 'width', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/width' },
      { name: 'height', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height' },
      { name: 'max-width', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-width' },
      { name: 'min-width', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width' },
      { name: 'max-height', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-height' },
      { name: 'min-height', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height' },
    ],
  },
  {
    name: '外边距',
    sub: 'Margin',
    children: [
      { name: 'margin', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin' },
      { name: 'margin-top', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top' },
      { name: 'margin-right', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right' },
      { name: 'margin-bottom', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom' },
      { name: 'margin-left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left' },
      { name: 'margin-block-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start' },
      { name: 'margin-block-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end' },
      { name: 'margin-inline-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start' },
      { name: 'margin-inline-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end' },
      { name: 'margin-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-start' },
      { name: 'margin-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-end' },
      { name: 'margin-block', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block' },
      { name: 'margin-inline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline' },
    ],
  },
  {
    name: '内边距',
    sub: 'Padding',
    children: [
      { name: 'padding', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding' },
      { name: 'padding-top', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top' },
      { name: 'padding-right', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right' },
      { name: 'padding-bottom', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom' },
      { name: 'padding-left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left' },
      { name: 'padding-block-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start' },
      { name: 'padding-block-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end' },
      { name: 'padding-inline-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start' },
      { name: 'padding-inline-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end' },
      { name: 'padding-start', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-start' },
      { name: 'padding-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-end' },
      { name: 'padding-block', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block' },
      { name: 'padding-inline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline' },
    ],
  },
  {
    name: '边框',
    sub: 'Border',
    children: [
      { name: 'border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border' },
      { name: 'border-width', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' },
      { name: 'border-style', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-style' },
      { name: 'border-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-color' },
      { name: 'border-top', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top' },
      { name: 'border-right', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-right' },
      { name: 'border-bottom', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom' },
      { name: 'border-left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-left' },
      { name: 'border-radius', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius' },
      { name: 'border-image', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image' },
    ],
  },
  {
    name: '背景',
    sub: 'Background',
    children: [
      { name: 'background', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background' },
      { name: 'background-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color' },
      { name: 'background-image', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image' },
      { name: 'background-position', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position' },
      { name: 'background-size', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' },
      { name: 'background-repeat', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat' },
      { name: 'background-attachment', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment' },
      { name: 'background-clip', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip' },
      { name: 'background-origin', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin' },
    ],
  },
  {
    name: '颜色',
    sub: 'Color',
    children: [
      { name: 'color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
      { name: 'opacity', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity' },
    ],
  },
  {
    name: '字体',
    sub: 'Font',
    children: [
      { name: 'font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font' },
      { name: 'font-family', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
      { name: 'font-size', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size' },
      { name: 'font-style', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style' },
      { name: 'font-weight', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight' },
      { name: 'font-variant', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant' },
      { name: 'line-height', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height' },
      { name: 'text-transform', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
      { name: 'letter-spacing', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing' },
      { name: 'word-spacing', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing' },
    ],
  },
  {
    name: '文本',
    sub: 'Text',
    children: [
      { name: 'text-align', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align' },
      { name: 'text-indent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent' },
      { name: 'white-space', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space' },
      { name: 'text-shadow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow' },
      { name: 'text-overflow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow' },
      { name: 'text-decoration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
      { name: 'text-transform', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
    ],
  },
  {
    name: '文本装饰',
    sub: 'Text Decoration',
    children: [
      { name: 'text-decoration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
      { name: 'text-decoration-line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line' },
      { name: 'text-decoration-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color' },
      { name: 'text-decoration-style', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style' },
    ],
  },
  {
    name: '书写模式',
    sub: 'Writing Modes',
    children: [
      { name: 'writing-mode', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode' },
      { name: 'text-combine-upright', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright' },
      { name: 'text-orientation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation' },
    ],
  },
  {
    name: '列表',
    sub: 'List',
    children: [
      { name: 'list-style', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style' },
      { name: 'list-style-type', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type' },
      { name: 'list-style-position', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position' },
      { name: 'list-style-image', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image' },
    ],
  },
  {
    name: '表格',
    sub: 'Table',
    children: [
      { name: 'display: table', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display-table' },
      { name: 'table-layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout' },
      { name: 'border-collapse', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse' },
      { name: 'border-spacing', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing' },
      { name: 'caption-side', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side' },
      { name: 'empty-cells', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells' },
      { name: 'scope', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scope' },
    ],
  },
  {
    name: '内容',
    sub: 'Content',
    children: [
      { name: 'content', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/content' },
      { name: 'counter-reset', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset' },
      { name: 'counter-increment', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment' },
    ],
  },
  {
    name: '用户界面',
    sub: 'User Interface',
    children: [
      { name: 'user-select', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select' },
      { name: 'cursor', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' },
      { name: 'resize', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resize' },
      { name: 'appearance', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/appearance' },
    ],
  },
  {
    name: '变换',
    sub: 'Transform',
    children: [
      { name: 'transform', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform' },
      { name: 'transform-origin', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin' },
    ],
  },
  {
    name: '过渡',
    sub: 'Transition',
    children: [
      { name: 'transition', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition' },
      { name: 'transition-property', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property' },
      { name: 'transition-duration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration' },
      { name: 'transition-timing-function', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function' },
      { name: 'transition-delay', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay' },
    ],
  },
  {
    name: '动画',
    sub: 'Animation',
    children: [
      { name: 'animation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation' },
      { name: 'animation-name', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name' },
      { name: 'animation-duration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration' },
      { name: 'animation-timing-function', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function' },
      { name: 'animation-delay', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay' },
      { name: 'animation-iteration-count', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count' },
      { name: 'animation-direction', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction' },
      { name: 'animation-fill-mode', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode' },
      { name: 'animation-play-state', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state' },
    ],
  },
  {
    name: '打印',
    sub: 'Printing',
    children: [
      { name: 'page-break-before', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before' },
      { name: 'page-break-after', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after' },
      { name: 'page-break-inside', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside' },
      { name: 'orphans', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/orphans' },
      { name: 'widows', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/widows' },
    ],
  },
  {
    name: '语法与规则',
    sub: 'Rules',
    children: [
      { name: 'syntax', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax' },
      { name: 'rules', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Rules' },
    ],
  },
  {
    name: '颜色值',
    sub: 'Values',
    children: [
      { name: 'color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
      { name: 'opacity', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity' },
    ],
  },
  {
    name: '文本值',
    sub: 'Textual',
    children: [
      { name: 'font-family', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
      { name: 'font-size', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size' },
      { name: 'text-transform', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
      { name: 'text-decoration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
    ],
  },
  {
    name: '函数值',
    sub: 'Functional',
    children: [
      { name: 'calc()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc' },
      { name: 'var()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/var' },
      { name: 'attr()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/attr' },
    ],
  },
  {
    name: '图像值',
    sub: 'Image',
    children: [
      { name: 'url()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/url' },
      { name: 'image()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/image' },
    ],
  },
  {
    name: '数字值',
    sub: 'Numeric',
    children: [{ name: 'number', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/number' }],
  },
  {
    name: '其它类型值',
    sub: 'Other',
    children: [
      { name: 'initial', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/initial' },
      { name: 'inherit', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inherit' },
      { name: 'unset', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/unset' },
      { name: 'revert', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/revert' },
    ],
  },
  {
    name: '长度单位',
    sub: 'Length',
    children: [
      { name: 'px', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'em', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'rem', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'vw', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'vh', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'cm', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'mm', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'in', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'pt', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
      { name: 'pc', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
    ],
  },
  {
    name: '角度单位',
    sub: 'Angle',
    children: [
      { name: 'deg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/angle' },
      { name: 'rad', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/angle' },
      { name: 'grad', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/angle' },
      { name: 'turn', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/angle' },
    ],
  },
  {
    name: '时间单位',
    sub: 'Time',
    children: [
      { name: 's', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/time' },
      { name: 'ms', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/time' },
    ],
  },
  {
    name: '频率单位',
    sub: 'Frequency',
    children: [
      { name: 'hz', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/frequency' },
      { name: 'khz', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/frequency' },
    ],
  },
  {
    name: '百分比值',
    sub: 'Percentage',
    children: [{ name: '%', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/percentage' }],
  },
  {
    name: '视口单位',
    sub: 'Viewport',
    children: [
      { name: 'vw', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/viewport' },
      { name: 'vh', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/viewport' },
      { name: 'vmin', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/viewport' },
      { name: 'vmax', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/viewport' },
    ],
  },
]

const Css = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.children)
    const columnCount = 6 // 列数
    const columnGap = 16 // 列间距
    const rowGap = 16 // 行间距
    const containerWidth = container.clientWidth
    const columnWidth = (containerWidth - (columnCount - 1) * columnGap) / columnCount

    // 记录每列的总高度
    const columns = Array(columnCount).fill(0)

    items.forEach((item) => {
      // 查找最短列
      const minColumnIndex = columns.indexOf(Math.min(...columns))

      item.style.position = 'absolute'
      item.style.top = `${columns[minColumnIndex]}px`
      item.style.left = `${minColumnIndex * (columnWidth + columnGap)}px`
      item.style.width = `${columnWidth}px`

      // 更新该列的高度
      columns[minColumnIndex] += item.clientHeight + rowGap
    })

    container.style.position = 'relative'
  }, [])

  return (
    <>
      <Title>CSS 速查表</Title>
      <div ref={containerRef}>
        {cssConcepts.map((category, index) => (
          <div className='item' key={index}>
            <h2 className='mb-2 font-bold'>{category.name}</h2>
            <div className='space-y-2'>
              {category.children.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block rounded px-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white'>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Css
