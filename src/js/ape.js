/**
 * APE Autocomplete v1.0.0
 * Autocomplete lib to fill in other fields
 * Thiago Neves
 * https://github.com/thiagomneves/apeautocomplete
 */

($.prototype.aautocomplete = function (fn, options) {
    var input = this;
    var source;
    var val;

    $(input).attr('autocomplete', 'off');

    $(document).click(function (e) {
        if (!$(e.target).is('#autop li') && !$(e.target).is(input)) {
            $("#autop").remove();
        }
    });

    $('body').on('click', 'li.autop-li', function () {
        for (let key in options.destination) {
            $('#' + options.destination[key]).val($(this).attr(key))
        }
        $(input).val($(this).children('span').html())
        $("#autop").remove();
    });

    input.on('click keyup', function (e) {
        val = $(this).val();
        $("#autop").remove();
        if (typeof fn === "function") {
            source = fn(val);
        } else {
            source = fn;
        }

        if (e.type !== 'click') {
            $("#autop").remove()
        }

        $.a = `<div id='autop' class='autop'><div id='autopin' style="width: ${$(this).outerWidth()}px"><ul>`;

        source.forEach(mountLi)
        $.a += "</ul></div></div>";
        $(this).after($.a);
    });

    var attr = '';
    var display = '';
    const mountLi = (element, index, array) => {
        if (typeof element === 'object' && element.constructor !== Array) {
            for (let key in element) {
                attr += key + "='" + element[key] + "' ";
            }

            let i = 0;
            for (let key in options.display) {
                if (i == 0) {
                    display += `<span>${element[options.display[key]]}</span>`;
                } else {
                    display += ` <small>${element[options.display[key]]}</small>`;
                }
                i++;
            }

            $.a += `<li class='autop-li' ${attr} >${display}</li>`;
            attr = '';
            display = '';
        } else {
            $.a += `<li class='autop-li'><span>${element}</span></li>`
        }
    }

});