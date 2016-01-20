$(function () {

    /**
     * Конструктор Калькулятор
     * @constructor
     */
    var Calc = function (container) {
        this._container = $(container);
        this._initCalc();
        this._bindEvents();
    };

    Calc.prototype._initCalc = function () {

        this._container.html('');

        var $input = $("<input class=\"action\" type=\"text\"/>");
        this._container.append($input);

        var $button = $("<input class=\"btn btn--clear\" type=\"button\" value=\"C\"/>");
        this._container.append($button);

        var $div = $("<div class=\"button\"></div>");
        this._container.append($div);

        // Add number buttons
        $div
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('00'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('0'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('1'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('2'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('3'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('4'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('5'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('6'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('7'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('8'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('9'));

        // Add operation buttons
        $div
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('+'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('-'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('*'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('/'))
            .append($('<input />').addClass('btn').addClass('btn--val').prop('type', 'button').val('.'))
            .append($('<input />').addClass('btn').addClass('btn--done').prop('type', 'button').val('='));
    };

    Calc.prototype._bindEvents = function () {
        var textInput = this._container.find(".action");

        this._container.find('.btn--val').bind('click', function () {
            var valueInput = textInput.val();
            var valueBtn = $(this).val();
            var inputFinal = valueInput + valueBtn;
            textInput.val(inputFinal);
        });

        this._container.find('.btn--clear').bind('click', function () {
            textInput.val('');
        });

        this._container.find('.btn--done').bind('click', function () {
            var result = eval(textInput.val());
            textInput.val(result);
        });
    };

    window.Calc = function (elements) {
        return elements.each(function () {
            return new Calc(this);
        })
    };

});