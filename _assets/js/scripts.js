var Site = {

    init: function () {


        //jQuery
        jQuery.noConflict();

        (function ($) {
	        
	        
			//BOOTSTRAP MENU DEFAULTS (Can't hardcode due to module)

			$('#navbar div > ul').addClass('navbar-nav');
			$('#navbar div > ul').addClass('nav');
	
			$('.navbar-nav li > ul').parent().addClass('dropdown');
			$('.navbar-nav li > ul > li > ul').parent().addClass('dropdown-submenu').removeClass('dropdown');					
			
			//$('.navbar-nav li.dropdown > a').addClass('dropdown-toggle').attr("data-toggle", "dropdown");
			$('.navbar-nav li.dropdown ul').addClass('dropdown-menu');		

			$('.navbar-nav li.dropdown > a').append('<b class="caret"></b>');

			// $('.dropdown-submenu > a').append('<b class="caret"></b>');
					
			// Keeps dropdown open when has 'selected' class (BC override)
			$(".navbar-nav li.selected > ul").mouseover(function(){
			    $(this).parent().addClass('open');
			  });
			
			//$(".navbar-default li.dropdown ul li.selected ul").mouseover(function(){
			//    $(this).parent().addClass('dropdown-submenu');
			// });
			  			  
			$(".navbar-nav li.selected ul li.selected").mouseout(function(){
			   $(this).addClass('dropdown-submenu');
			}); //Deals with the BC 'selected' dropping classes 
			
			
	        
            $(document).ready(function () {

                //JQUERY CALLS HERE



				//BOOTSTRAP FIXED MENU
				

				$('.navbar').affix({
				      offset: {
				        top: $('header').height()
				        //top: 200
				      }
				});	
				
				



				//SCROLL TO TOP
				$('.scroll-top').on('click', function(event) {
				    event.preventDefault();
				    $('html, body').animate({scrollTop:0}, 800);       
				});


				//SHOP

				$('.shop .shopMain').each(function () {
					$(this).find('.productLarge').closest('.shop-main').parent().addClass('productDetailWrap').closest('body.shop').addClass('shopDetail');
				});
				
				$('.shop .shopMain').each(function () {
					$(this).find('.productSmall').closest('.shop-main').parent().addClass('productListWrap').closest('body.shop').addClass('shopList');
				});
				
				//CHANGE COLUMNS FOR LIST VIEW	
				
				$("ul.productfeaturelist li").addClass("col-lg-3 col-md-3 col-sm-6 col-xs-12");
				$("ul.productSmall li").addClass("col-lg-4 col-md-6 col-sm-6 col-xs-12");
				$("ul.catalogueList").addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
				$("ul.catalogueList li").addClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");
				
				
				$('.shop-catalogue h2 a').each(function() {
				var catLink = $(this).attr('href');
					console.log(catLink);
				$(this).closest('.shop-catalogue').find('.cat-link').attr('href',catLink);
				});
					
				$('.currencyConverter .btnCurrency').click(function() {
					$(this).addClass('hide').closest('.currencyConverter').find('.showThis').addClass('display');
				});
				
				$(".shoppingCart .productRemove .productitemcell a").html("x");


		
				//BLOG

				$(".show-recent-posts").click(function() {
					$(".recent-posts").toggleClass('hidden').siblings('.blog-bar-open').addClass('hidden');
				});
				$(".show-archive").click(function() {
					$(".archive").toggleClass('hidden').siblings('.blog-bar-open').addClass('hidden');
				});
				$(".show-tags").click(function() {
					$(".tags").toggleClass('hidden').siblings('.blog-bar-open').addClass('hidden');
				});


				//FAQ

				$('.faq h3').click(function(){
					$(this).toggleClass('active');
					$(this).parent('.faq').find('.faq-answer').slideToggle('display');
				});
				
				
				//SEARCH DROP DOWN
				
				$('header .search-bar').hide();
				$('header .navbar-right li.search').click(function() {
					$(this).closest('header').find('.search-bar').slideToggle();
				});
				
				
				//LIST VIEW IMAGE RATIOS	
				
			    $('.list-view .image img').addClass(function() {
			        if (this.height === this.width) {
			            return 'square';
			        } else if (this.height > this.width) {
			            return 'portrait';
			        } else {
			            return 'landscape';
			        }
			    });
                
                
                if($('.productSelectInput').length){
                    
                    $('.productSelectInput').prepend($('<option>', {
                        value: '',
                        text: '- Select Size -',
                        selected: 'selected'
                    }));
                    
                }

            }); //END JQUERY
        })(jQuery);
    }
}

Site.init();