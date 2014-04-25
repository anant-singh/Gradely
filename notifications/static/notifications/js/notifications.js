/**
 * Notifications JS module.
 * Create and initialize an object which polls for notifications.
 *
 * @param notifications_container_id The element to display the notifications in.
 * @param notification_count_container_id The element to display the notification count in.
 * @param notification_endpoint The URL from which to fetch notifications.
 * @returns {stop_polling: stop_polling} object containing a method to stop polling. {{stop_polling: stop_polling}}
 */
var GradelyNotification = function(notifications_container_id, notification_count_container_id, notification_endpoint) {

    var notifications_container;
    var notification_count_container;
    var poll_timer;

    var init = (function() {
        notifications_container = $('#' + notifications_container_id);
        notification_count_container = $('#' + notification_count_container_id);
        poll_timer = setInterval(function(){ get_data(); }, 2000);
    })();

    var stop_polling = function() {
        clearInterval(poll_timer);
    };

    var ajax_success = function(data, textStatus, jqXHR) {
        notifications_container.html(data);
        notification_count_container.text($('#notification-count').text());
    };

    var get_data = function() {
        $.ajax({
            type: "POST",
            url: notification_endpoint,
            success: ajax_success,
            dataType: 'html'
        });
    };

    return {
        stop_polling: stop_polling
    };
};

function mark_as_read(notification_pk) {

    $.ajax({
        type: "POST",
        url: '/notifications/mark_notification_as_read/',
        data: {"notification_pk": notification_pk},
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        }
    });

}