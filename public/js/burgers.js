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
        //Send post request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
        $(this).val('');
    });


    $(function () {
        //Devour button
        $("#devour-burger").on("click", function (event) {
            event.preventDefault();

            const id = $(this).data("id");
            console.log(id);

            $.ajax("/api/burger" + id, {
                type: "PUT",
                data: { devoured: 1 }
            }).then(
                function () {
                    location.reload();
                }
            );
        });
    });
});