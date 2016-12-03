
function $(str, context) {
	if (str[0] == "#") {
		return document.getElementById(str.substr(1));
	} else if (str.beginWith("<") && str.endWith(">")){
		return document.createElement(str.substr(1, str.length-2));
	} else if (str[0] == ".") {
		return (context || document).getElementsByClassName(str.substr(1));
	} else {
		return (context || document).getElementsByTagName(str);
	}
}

//读取、设置属性
Element.prototype.attr = function (name, string) {
	if (typeof name == "object") {
		for (var i in name) {
			this.setAttribute(i, name[i]);
		}
		return this;
	} else {
		if (typeof string == "undefined") {
			return this.getAttribute(name);
		} else {
			this.setAttribute(name, string);
			return this;
		}
	}
};

Element.prototype.append = function (el) {
	this.appendChild(el);
	return this;
};

Element.prototype.appendTo = function (el) {
	el.appendChild(this);
	return this;
};

//读取或者设置html
Element.prototype.html = function (string) {
	if (typeof string == "undefined") {
		return this.innerHTML;
	}
	else {
		this.innerHTML = string;
		return this;
	}
};

Element.prototype.addClass = function (name) {
	if (! this.hasClass(name))
		this.className += " " + name;
	return this;
};

//判断是否有class
Element.prototype.hasClass = function (name) {
	var arr = this.className.split(" ");
	return arr.indexOf(name) != -1;
};

//判断要删除的className
Element.prototype.removeClass = function (name) {
	var arr = this.className.split(" ");
	var idx;
	while ((idx = arr.indexOf(name)) != -1) {
		arr.splice(idx, 1);
	}
	this.className = arr.join(" ");
	return this;
};

Element.prototype.remove = function(){
	this.parentNode.removeChild(this);
}

String.prototype.beginWith = function(str) {
	return this.indexOf(str) === 0;
};

String.prototype.endWith = function(str) {
	var idx = this.lastIndexOf(str);
	return idx>-1 && idx+str.length === this.length;
};

//去除字符串头尾的空格
String.prototype.trim = function () {
	return this.replace(/^\s+/, "").replace(/\s+$/, "");
};

//string 补齐字符
String.prototype.paddingLeft = function(str,length){

}

