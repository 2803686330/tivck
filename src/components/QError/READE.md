## QError 公共判断未登录布局

```javascript

    import QError from '@@@/QError'

    /**
		 * data 参数
     * 
		 * @param {className} { String } className
		 * @param {style} { Object } 
		 * @param {title} { String } title 文本
		 * @param {image} { String } 背景颜色
		 * @param {type} { String } 类型
		 * @param {description} { String } 描述
		 * @param {fullPage} { 布尔 } //是否为整页异常
     * 
     * @param antd 所有属性
    */

   <ErrorBlock
      className={cs('errorblock',{ [className]: className })}
      style={{ ...style }}
      title={title}
      image={image}
      description={description}
      fullPage={fullPage}
      {...item}
    />

```