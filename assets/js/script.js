$(document).ready(function () {
	$('.quote').quovolver();

	// Terminal Slideshow
	$('.terminal-slides').responsiveSlides({
		auto: true,
		speed: 800,
		timeout: 6000
	});

	// Tabbing between wget and curl installs
	$('.install li').on('click', function() {
		$('.install li').removeClass('active-tab');
		$(this).addClass('active-tab');

		if ($('#wget-tab').hasClass('active-tab')) {
			$('.curl').hide();
			$('.wget').show();
		}
		else {
			$('.wget').hide();
			$('.curl').show();
		}
		return false;
	});

	// Responsive Nav Slidedown
	var nav = $('.nav');

	$('.nav-trigger').on('click', function() {
		nav.slideToggle();
	});

	$('.code').focus(function () {
		var $this = $(this);
		$this.select();

		// To Fix Chrome's bug
		$this.mouseup(function() {
			$this.unbind("mouseup");
			return false;
		});
	});



	$(window).resize(function() {
		var d = $(window).width();
		if(d > 740 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});

	// Analytics Event Tracking for copying install text
	$('.code').bind('copy', function() {
		_gaq.push(['_trackEvent', 'Copy to Clipboard', 'Copied Install Code']);
	});

  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash === 'mailing-list') {
      $('#modal').modal();
    }
  }

});
var clipboardDemos=new ClipboardJS('[data-clipboard-copy]');clipboardDemos.on('success',function(e){e.clearSelection();showTooltip(e.trigger,'Copied!');});clipboardDemos.on('error',function(e){console.error('Action:',e.action);console.error('Trigger:',e.trigger);showTooltip(e.trigger,fallbackMessage(e.action));});
function clearTooltip(elem){elem.setAttribute('data-tooltip','Click to Copy');}
function showTooltip(elem,msg){elem.setAttribute('data-tooltip',msg);}
function fallbackMessage(action){var actionMsg='';var actionKey=(action==='cut'?'X':'C');if(/iPhone|iPad/i.test(navigator.userAgent)){actionMsg='No support :(';}
else if(/Mac/i.test(navigator.userAgent)){actionMsg='Press ⌘-'+actionKey+' to '+action;}
else{actionMsg='Press Ctrl-'+actionKey+' to '+action;}
return actionMsg;}