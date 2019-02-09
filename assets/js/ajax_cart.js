function ajaxHandler(e) {
    e.preventDefault();
    var post_url = $(this).attr("action");
    var form_data = $(this).serialize();

    $.post(post_url, form_data, function (response) {
        $.bootstrapGrowl(response.message, {
            offset: { from: "top", amount: 60 },
            type: "success",
            allow_dismiss: false
        });
        $(".cart-count").text(response.cart_count)
    });
}

var ajaxCart = {
    init: function () {
        $(function () {
            $(".cart-form").on("submit", ajaxHandler)
        })
    }
}

ajaxCart.init()