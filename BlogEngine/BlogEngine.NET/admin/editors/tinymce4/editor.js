var editorGetHtml = function () {
    return tinymce.activeEditor.getContent();
}

var htmlContent;

var editorSetHtml = function (html) {
    if (tinymce.activeEditor) {
        tinymce.activeEditor.setContent(html);
    }
    else {
        // If not initialized yet, we need to delay it
        htmlContent = html;
    }
}

tinymce.init({
    selector: '#txtContent',
   
    plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code codesample fullscreen fullpage textcolor imagetools spellchecker",
        "insertdatetime media table contextmenu paste sh4tinymce filemanager"
    ],
    toolbar1: "styleselect | bold underline italic | alignleft aligncenter alignright | bullist numlist | forecolor backcolor | link media image sh4tinymce | fullscreen fullpage code | filemanager",
    toolbar2: 'print preview | emoticons',
    fullpage_default_doctype: "<!DOCTYPE html>",
    image_advtab: true,
    autosave_ask_before_unload: false,
    max_height: 1000,
    min_height: 300,
    height: 500,
    menubar: false,
    
    skin: 'grey-grad',
    relative_urls: false,
    browser_spellcheck: true,
    paste_data_images: true,
    setup: function (editor) {
        editor.on('init', function (e) {
            if (htmlContent) {
                editor.setContent(htmlContent);
            }
        });
    }
});
