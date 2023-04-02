## QButton 公共按钮

```javascript

    import QHead from '@@@/QButton'

    /**
		 * data 参数
     * 
		 * @param {className} { String } className
		 * @param {style} { Object } 阴影
     * @param {color} { String } [#000] 颜色
		 * @param {width} { String } 背景颜色
		 * @param {height} { String } 背景颜色
		 * @param {title} { String } title 文本
		 * @param {type} { String } 按钮的类型
		 * @param {color} { String } 设置按钮文字颜色
		 * @param {size} { String } 设置按钮大小
		 * @param {background} { String } 设置背景颜色
		 * @param {fontSize} { fontSize } 设置文字的大小
     * @param {borderRadius} { String } 设置按钮圆角
		 * @param {onClick} { 函数 } 按钮点击事件
     
     * 
     * @param antd 所有属性
    */

    <Button
      className={cs({ [className]: className })}
      style={{
        ...style,
        width,
        height,
        color,
        fontSize,
        background,
        borderRadius,
        margin,
      }}
      type={type}
      size={size}
      onClick={onButton}
      {...item}
    >
      {title}
    </Button>

```