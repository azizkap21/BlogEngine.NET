var editorGetHtml = function () {
    return CKEDITOR.instances.editor1.getData();
}

var editorSetHtml = function (html) {
	CKEDITOR.instances.editor1.setData(html);
}

CKEDITOR.replace( 'editor1', {
	on: {
		pluginsLoaded: function(evt) {
			var doc = CKEDITOR.document, ed = evt.editor;
			if (!ed.getCommand('bold') )
				doc.getById('exec-bold').hide();
			if (!ed.getCommand('link'))
				doc.getById('exec-link').hide();
		}
	}
});