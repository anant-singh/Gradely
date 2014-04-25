function send_message() {
    $('#message_send_status').fadeOut();
    $.ajax({
        type: "POST",
        url: '/messaging/send_message/',
        data: $('#compose_message_form').serialize(),
        success: function (data, textStatus, jqXHR) {
            if (data.status != 'true') {
                $('#message_send_status').text(data.reason).fadeIn();
            }
            else {
                // close the message compose modal
                $('#md-normal').modal('hide');
                // show success notification
                $.notific8(data.reason, { life: 5000, theme: "success", heading: "Message Sent"});
            }
        }
    });
}