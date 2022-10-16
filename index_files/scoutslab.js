function follow(user)
{
    $.ajax({
        url: "/profile/" + user + '/follow'
    }).done(function() {
        $('#user-follow').html('<a role="button" onclick="unfollow(' + user + ')" ><i class="fa fa-minus"></i> Unfollow</a>');
    });
}

function unfollow(user)
{
    $.ajax({
        url: "/profile/" + user + '/unfollow'
    }).done(function() {
        $('#user-follow').html('<a role="button" onclick="follow(' + user + ')" ><i class="fa fa-plus"></i> Follow</a>');
    });
}