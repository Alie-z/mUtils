export var GenericType;
(function (GenericType) {
    let StrTrimType;
    (function (StrTrimType) {
        /** 去除首尾字符 */
        StrTrimType[StrTrimType["LEFT_RIGHT"] = 0] = "LEFT_RIGHT";
        /** 去除所有空格 */
        StrTrimType[StrTrimType["ALL"] = 1] = "ALL";
        /** 去除左边的空格 */
        StrTrimType[StrTrimType["LEFT"] = 2] = "LEFT";
        /** 去除右边课空格 */
        StrTrimType[StrTrimType["RIGHT"] = 3] = "RIGHT";
    })(StrTrimType = GenericType.StrTrimType || (GenericType.StrTrimType = {}));
})(GenericType || (GenericType = {}));
export var ImageUtilsType;
(function (ImageUtilsType) {
    let FontStyle;
    (function (FontStyle) {
        FontStyle["fanmily"] = "14px Arial";
        FontStyle["color"] = "#d4546f";
    })(FontStyle = ImageUtilsType.FontStyle || (ImageUtilsType.FontStyle = {}));
    let TextType;
    (function (TextType) {
        TextType["Text"] = "text";
        TextType["Image"] = "image";
    })(TextType = ImageUtilsType.TextType || (ImageUtilsType.TextType = {}));
})(ImageUtilsType || (ImageUtilsType = {}));
