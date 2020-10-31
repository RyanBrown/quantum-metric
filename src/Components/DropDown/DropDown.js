import React from 'react';
import './styles.scss';

// const stringDrop = ['equals', 'contains', 'starts with', 'in list'];
// const integerDrop = ['equals', 'between', 'greater than', 'less than', 'in list'];

var x, i, j, l, ll, selElement, a, b, c;
// Look for any elements with the class "custom-select":
x = document.getElementsByClassName('custom-select');
l = x.length;

for (i = 0; i < l; i++) {
    selElement = x[i].getElementsByTagName('select')[0];
    ll = selElement.length;

    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement('DIV');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElement.options[selElement.selectedIndex].innerHTML;
    x[i].appendChild(a);

    // For each element, create a new DIV that will contain the option list:
    b = document.createElement('DIV');
    b.setAttribute('class', 'select-items select-hide');
    for (j = 1; j < ll; j++) {
        // For each option in the original select element, create a new DIV that will act as an option item:
        c = document.createElement('DIV');
        c.innerHTML = selElement.options[j].innerHTML;
        c.addEventListener('click', function (e) {
            /* When an item is clicked, update the original select box, and the selected item: */
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName('select')[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML === this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName('same-as-selected');
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute('class');
                    }
                    this.setAttribute('class', 'same-as-selected');
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
        // When the select box is clicked, close any other select boxes, and open/close the current select box:
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
    });
}

function closeAllSelect(element) {
    // A function that will close all select boxes in the document, except the current select box:
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
        if (element === y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove('select-arrow-active');
        }
    }

    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide');
        }
    }
}

// If the user clicks anywhere outside the select box, then close all select boxes:
document.addEventListener('click', closeAllSelect);

export default function DropDown() {
    return (
        <div className='custom-select'>
            <select>
                <option value='0'>Select Option:</option>
                <option value='1'>User Email</option>
                <option value='2'>Screen Width</option>
                <option value='3'>Screen Height</option>
                <option value='4'># of Visits</option>
                <option value='5'>First Name</option>
                <option value='6'>Last Name</option>
                <option value='7'>Page Response time (ms)</option>
                <option value='8'>Domain</option>
                <option value='9'>Page Path</option>
                {/* Strings */}
                <option value=''>equals</option>
                <option value=''>contains</option>
                <option value=''>starts with</option>
                <option value=''>in list</option>
                {/* Integers */}
                <option value=''>equals</option>
                <option value=''>between</option>
                <option value=''>greater than</option>
                <option value=''>less than</option>
                <option value=''>in list</option>
            </select>
        </div>
    );
}
