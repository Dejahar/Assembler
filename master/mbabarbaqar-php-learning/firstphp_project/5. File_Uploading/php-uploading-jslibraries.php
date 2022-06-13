<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Upload using JS libraries</title>
        <!-- 1. Add CSS to `<head>` -->
        <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
    </head>
    <body>
        
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" class="dropzone" id="my-awesome-dropzone"></form>
        <script>
            // Note that the name "myDropzone" is the camelized
            // id of the form.
            Dropzone.options.myDropzone = {
                // Configuration options go here
            };
        </script>
    </body>
</html>