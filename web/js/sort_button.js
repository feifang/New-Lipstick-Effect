const pathLength =  68 * 2 + 200;

class BtnGroup {
  constructor(group) {
    this.group = group;
    this.buttons = Array.prototype.slice.call(
      this.group.querySelectorAll('.sort-btn')
    );
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('viewbox',
      `-1 -1 ${160 * this.buttons.length + 2} 42`
    );
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.currentPath = 'M -80, 40';
    this.currentIndex = -1;
    this.activateIndex(
      this.buttons.indexOf(
        this.group.querySelector('.active')
      )
    );
    this.group.appendChild(this.svg);
    this.svg.appendChild(this.path);
    this.refreshPath();
    for (const button of this.buttons) {
      button.addEventListener('click',
        e => this.onClick(e)
      );
    }
  }
  
  onClick(e) {
    const index = this.buttons.indexOf(e.srcElement || e.target);
    this.activateIndex(index);
  }
  
  refreshPath() {
    this.path.setAttributeNS(null, 'd', this.currentPath);
    this.path.style.strokeDashoffset = (-this.path.getTotalLength() + pathLength) * 0.9965;
  }
  
  center(index) {
    return index * 160 + 80;
  }
  
  removeClass(str) {
    if (this.buttons[this.currentIndex]) {
      this.buttons[this.currentIndex].classList.remove(str);
    }
  }

  addClass(str) {
    if (this.buttons[this.currentIndex]) {
      this.buttons[this.currentIndex].classList.add(str);
    }
  }

  activateIndex(index) {
    const lastCenter = this.center(this.currentIndex);
    const nextCenter = this.center(index);
    const offset = index < this.currentIndex ? -50 : 50;
    const curve = index < this.currentIndex ? -30 : 30;
    this.currentPath += `
      L ${lastCenter + offset        }, 40
      C ${lastCenter + offset + curve}, 40
        ${lastCenter + offset + curve},  0
        ${lastCenter + offset        },  0
      L ${lastCenter - offset        },  0
      C ${lastCenter - offset - curve},  0
        ${lastCenter - offset - curve}, 40
        ${lastCenter - offset        }, 40
      L ${nextCenter + offset        }, 40
      C ${nextCenter + offset + curve}, 40
        ${nextCenter + offset + curve},  0
        ${nextCenter + offset        },  0
      L ${nextCenter - offset        },  0
      C ${nextCenter - offset - curve},  0
        ${nextCenter - offset - curve}, 40
        ${nextCenter - offset        }, 40
      L ${nextCenter                 }, 40
    `;
    this.removeClass('active');
    this.currentIndex = index;
    this.addClass('active');
    this.refreshPath();
  }
};

const groups = Array.prototype.slice.call(document.querySelectorAll('.btn-group'));
for (const group of groups) {
  console.log(new BtnGroup(group));
}
