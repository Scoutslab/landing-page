function rate(report, rate)
{
    $.ajax({
        url: "/reports/" + report + '/rate?rate=' + rate
    }).done(function() {
        location.reload();
    });
}