$(document).ready(() => {

    //create a new burger
    $(".submit-btn").on("click", (event) => {
        event.preventDefault();
        console.log("button pressed");
        const burger_name = $('#burger_name').val().trim();
        console.log(burger_name);

        const newBurger = {
            burger_name: $('#burger_name').val().trim(),
        };
        console.log("burger_name:", burger_name)
        //Send post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
        $('#burger_name').val('');
    });


    $(function () {
        //Devour button
        $(".devour").on("click", function (event) {
            event.preventDefault();
            console.log("devour button pressed");

            const id = $(this).data("id");
            console.log(id);

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: { devoured: true }
            }).then(
                function () {
                    location.reload();
                }
            );
        });
    });
});