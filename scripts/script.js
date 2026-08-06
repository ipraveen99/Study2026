$(document).ready(function() {
        // side menu
    $(".sidenavbar a").click(function() {
            var link = $(this);
            var closest_ul = link.closest("ul");
            var parallel_active_links = closest_ul.find(".active")
            var closest_li = link.closest("li");
            var link_status = closest_li.hasClass("active");
            var count = 0;

            closest_ul.find("ul").slideUp(function() {
                    if (++count == closest_ul.find("ul").length)
                            parallel_active_links.removeClass("active");
            });

            if (!link_status) {
                    closest_li.children("ul").slideDown();
                    closest_li.addClass("active");
            }
    })

    // datatable
    new DataTable('table.themetable');

    // sidebar hide
    $(".menubtn").click(function(){
        $(".sidebar").toggleClass("hide");
      });

// drag / upload and crop

$('#dropImage').on('click', function() {
        $('#fileUpload').trigger('click');
    });
    
    $('#fileUpload').on('change', function(e) {
        addImage(e.target);
    });
    
    $("#dropImage").on("dragover", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('dragging');
    });
    
    $("#dropImage").on("dragleave", function(e) {
        $(this).removeClass('dragging');
    });
    
    $("#dropImage").on("drop", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer || e.originalEvent.dataTransfer;
        addImage(data);
    });
    
    function addImage(data) {
        var file = data.files[0];
        if (file.type.indexOf('image') === -1) {
            alert('Sorry, the file you uploaded doesn\'t appear to be an image.');
            return false;
        }
    
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                if (img.width < 800 || img.height < 500) {
                    alert('Sorry, the image you uploaded doesn\'t appear to be large enough.');
                    return false;
                }
                cropImage(img);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
    
    function cropImage(originalImage) {
    
        $(originalImage).attr('id', 'fullImage');
        $('#imageResize').html(originalImage);
        $('#sectionDragAndDrop').addClass('hidden');
        $('#sectionResize').removeClass('hidden');
    
        var newImage = new imageCrop('#fullImage', 800, 500);
    
        $('#imageCrop').on('click', function() {
            var results = newImage.crop();
            $('#previewthumbnail').html(results.img);
            $('#sectionResize').addClass('hidden');
            $('#sectionThumbnail').removeClass('hidden');
        });
    
    }

})

$( function() {
    $( "#datepicker" ).datepicker();
  } );


 $(function() {
  var alert = $(".toast");

  alert.hide();

  $(".toastbtn").click(function(e) {
    e.preventDefault();
    alert.slideDown();
    window.setTimeout(function() {
      alert.slideUp();
    }, 3800);
  });
});

