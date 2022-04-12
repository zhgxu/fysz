'use strict';
window.wallpaperPropertyListener = {
    
    flipUnitContainer: document.getElementsByClassName('flipUnitContainer'),
    flipCard: document.getElementsByClassName('flipCard'),
    span: document.getElementsByTagName('span'),
    upperCard: document.getElementsByClassName('upperCard'),
    lowerCard: document.getElementsByClassName('lowerCard'),
    ampm: document.getElementsByClassName('ampm'),
    am:document.querySelectorAll('.upperCard .ampm'),
    pm:document.querySelectorAll('.lowerCard .ampm'),
    isAmpm: false,
    fontSizeValue: 0,

	applyUserProperties: function(properties) {
		//window.alert(JSON.stringify(properties));
		if (properties.isAmpm) {
            this.setIsAmpm(properties.isAmpm.value);

        } if (properties.schemecolor) {
            this.schemecolor(properties.schemecolor.value);
            
		} if (properties.cardColor) {
            this.cardColor(properties.cardColor.value);
            
        } if (properties.fontColor) {
			this.fontColor(properties.fontColor.value);
			
		} if (properties.clockSize) {
			this.clockSize(properties.clockSize.value);
			
		} if (properties.fontSize) {
			this.fontSize(properties.fontSize.value);
			
		} if (properties.fontFamily) {
            this.fontFamily(properties.fontFamily.value);
		}
    },
    
    schemecolor(schemecolor) {
        if (!schemecolor) {
            return;
        }
    
        var color = schemecolor.split(' ').map(function(c) {
            return Math.ceil(c * 255);
        });
        document.getElementById("root").style.backgroundColor = 'rgb('+color+')';
        
        Array.prototype.forEach.call(this.upperCard, card => card.style.borderBottom = '1px solid rgb('+color+')');
        Array.prototype.forEach.call(this.lowerCard, card => card.style.borderTop = '1px solid rgb('+color+')');
                
    },

    cardColor(cardColor) {
        if (!cardColor) {
            return;
        }
        var color = cardColor.split(' ').map(function(c) {
            return Math.ceil(c * 255);
        });
        Array.prototype.forEach.call(this.flipUnitContainer, f => f.style.backgroundColor = 'rgb('+color+')');
        Array.prototype.forEach.call(this.flipCard, f => f.style.backgroundColor = 'rgb('+color+')');
    },

    fontColor(fontColor) {
        if(!fontColor){
            return;
        }
        var color = fontColor.split(' ').map(function(c) {
            return Math.ceil(c * 255);
        });
        Array.prototype.forEach.call(this.upperCard, card => card.style.color = 'rgb('+color+')');
        Array.prototype.forEach.call(this.lowerCard, card => card.style.color = 'rgb('+color+')');
        Array.prototype.forEach.call(this.span,      span => span.style.color = 'rgb('+color+')');
        Array.prototype.forEach.call(this.ampm,      card => card.style.color = 'rgb('+color+')');
    },

    clockSize(clockSize) {
        if (!clockSize) {
            return;
        }
        
        Array.prototype.forEach.call(this.flipUnitContainer, f => {
            f.style.width  = clockSize + 'px';
            f.style.height = clockSize + 'px';
        });
        Array.prototype.forEach.call(this.flipCard, f => {
            f.style.width  = clockSize + 'px';
            f.style.height = clockSize/2 + 'px';
        });
    },

    fontSize(fontSize) {
        if (!fontSize) {
            return;
        }
        this.fontSizeValue = fontSize;
        Array.prototype.forEach.call(this.span, s => s.style.fontSize = fontSize + 'px');
        Array.prototype.forEach.call(this.ampm, s => s.style.fontSize = fontSize/10 + 'px');
        let offset = (fontSize * 0.0652) + 'px';
        Array.prototype.forEach.call(this.ampm, s => s.style.left = offset);
        Array.prototype.forEach.call(this.am, div => div.style.top = offset);
        Array.prototype.forEach.call(this.pm, div => div.style.bottom = offset);
    },

    fontFamily(fontFamily) {
        if (!fontFamily) {
            return;
        }
        Array.prototype.forEach.call(this.upperCard, card => card.style.fontFamily = fontFamily);
        Array.prototype.forEach.call(this.lowerCard, card => card.style.fontFamily = fontFamily);
        Array.prototype.forEach.call(this.span,      span => span.style.fontFamily = fontFamily);
        Array.prototype.forEach.call(this.ampm,      card => card.style.fontFamily = fontFamily);
    },

    setIsAmpm(isAmpm) {
        this.isAmpm = isAmpm;
    }

}