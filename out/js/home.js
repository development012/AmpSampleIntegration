YUI().use('node', 'event', 'aui-modal', function (Y) {
 
    var leanModal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center lean-modal"> <iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/_a3s0IXSuxY?rel=0" frameborder="0" allowfullscreen></iframe> </div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>What is The Lean Startup?</h3>',
        modal: true,
        render: '#leanModal',
        resizable: {
          handles: ''
        },
        width: 595,
        height: 404
      }
    ).render();
    
    leanModal.hide();

    Y.one('.bb-lean').on(
        'click',
        function() {
            leanModal.show();
        }
    );
	Y.one('.yui3-widget-mask').on('click', function(){
		leanModal.hide();
	});

}); // YUI closing
$(document).ready(function ()
{
	//Fade in delay for the background overlay (control timing here)
	$("#bkgOverlay").delay(29990).fadeIn(400);
  //Fade in delay for the popup (control timing here)
	$("#delayedPopup").delay(30000).fadeIn(400);
	
	//Hide dialouge and background when the user clicks the close button
	$("#btnClose").click(function (e)
	{
		HideDialog();
		e.preventDefault();
	});
});
//Controls how the modal popup is closed with the close button
function HideDialog()
{
	$("#bkgOverlay").fadeOut(400);
	$("#delayedPopup").fadeOut(300);
}
