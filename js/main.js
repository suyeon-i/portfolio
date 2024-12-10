$(function(){
	const offsetData={
		shadowInfo: [
			{ left: "0%", width: "50%" },
			{ left: "50%", width: "40%" },
			{ left: "0%", width: "40%" },
			{ left: "0%", width: "30%" },
			{ left: "40%", width: "50%" }
		],
		textInfo: [
			{ left: "55%" },
			{ left: "5%" },
			{ left: "45%" },
			{ left: "35%" },
			{ left: "5%" }
		]
	};

	const titleData=[
		{
			title: "<span>COS</span><span>Renewal</span>",
			subject: "<dt>web design</dt><dd><span>Figma Prototype</span><span>Adobe Photoshop</span></dd>",
			link: "https://www.behance.net/gallery/214400209/COS-"
		},
		{
			title: "<span>BBIA</span><span>Renewal</span>",
			subject: "<dt>web design</dt><dd><span>Figma Prototype</span><span>Adobe Photoshop</span></dd>",
			link: "https://www.behance.net/gallery/214400539/BBIA-"
		},
		{
			title: "<span>VERTE</span><span>Renewal</span>",
			subject: "<dt>web design</dt><dd><span>Figma Prototype</span><span>Adobe Photoshop</span></dd>",
			link: "https://www.behance.net/gallery/214400703/VERTE-"
		},
		{
			title: "<span>Re_L Renewal</span><span>Renewal</span>",
			subject: "<dt>web design</dt><dd><span>Figma Prototype</span><span>Adobe Photoshop</span></dd>",
			link: "https://www.behance.net/gallery/214400821/Re_L-"
		},
		{
			title: "<span>Marie Claire</span><span>Renewal</span>",
			subject: "<dt>web design</dt><dd><span>Figma Prototype</span><span>Adobe Photoshop</span></dd>",
			link: "https://www.behance.net/gallery/214400897/Maire-Claire-"
		}
	];

	let current, total, winw;

	const mainSwiper=new Swiper(".mainSwiper", {
		allowTouchMove: false,
		loop: true,
		autoplay: {
			delay: 12000,
			disableOnInteraction: false
		},
		effect: "fade",
		on: {
			init: function(){
				current=this.realIndex;
				total=this.slides.length;

				$(".main_slider .swiper_control .current").text("0"+(current+1));
				$(".main_slider .swiper_control .total").text("0"+total);
				$(".main_slider .progressbar span").delay(10).animate({ width: "100%" }, 8000);

				setTimeout(function(){
					$(".main_slider .swiper-slide.list"+(current+1)).find(".area").addClass("active");
					$(".main_slider .keytext").addClass("active");

					if(winw > 720){
						$(".main_slider .keytext").css({ left: offsetData.textInfo[current].left });
					}
					else{
						$(".main_slider .keytext").css({ left: 30 });
					}

					$(".main_slider .keytext .title").html(titleData[current].title);
					$(".main_slider .keytext .subject dl").html(titleData[current].subject);
					$(".main_slider .link").attr("href", titleData[current].link);
					$(".main_slider .shadow").css({ left: offsetData.shadowInfo[current].left, width: offsetData.shadowInfo[current].width });
				}, 1000);
			},
			slideChangeTransitionEnd: function(){
				current=this.realIndex;

				$(".main_slider .swiper-slide .area").removeClass("active");
				$(".main_slider .keytext").removeClass("active");
				$(".main_slider .swiper_control .current").text("0"+(current+1));
				$(".main_slider .progressbar span").stop().removeAttr("style");
				$(".main_slider .progressbar span").delay(10).animate({ width: "100%" }, 8000);

				setTimeout(function(){
					$(".main_slider .swiper-slide.list"+(current+1)).find(".area").addClass("active");
					$(".main_slider .keytext").addClass("active");

					if(winw > 720){
						$(".main_slider .keytext").css({ left: offsetData.textInfo[current].left });
					}
					else{
						$(".main_slider .keytext").css({ left: 30 });
					}

					$(".main_slider .keytext .title").html(titleData[current].title);
					$(".main_slider .keytext .subject dl").html(titleData[current].subject);
					$(".main_slider .link").attr("href", titleData[current].link);
					$(".main_slider .shadow").css({ left: offsetData.shadowInfo[current].left, width: offsetData.shadowInfo[current].width });
				}, 200);
			}
		}
	});

	$(window).resize(function(){
		winw=$(window).width();

		if(winw > 720){
			$(".main_slider .keytext").css({ left: offsetData.textInfo[current].left });
		}
		else{
			$(".main_slider .keytext").css({ left: 30 });
		}
	});

	$(window).trigger("resize");

	$(".main_slider .page_control .bt_prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	$(".main_slider .page_control .bt_next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});

	$("#header .tab").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("body").addClass("fixed");
			$(this).addClass("active");
			$("#header .total").fadeIn(300);
		}
		else{
			$("body").removeClass("fixed");
			$(this).removeClass("active");
			$("#header .total").fadeOut(300);
		}
	});

	$("#header .total li").click(function(e){
		e.preventDefault();

		$("body").removeClass("fixed");
		$("#header .tab").removeClass("active");
		$("#header .total").fadeOut(300);
		n=$(this).index();

		mainSwiper.slideTo(n);
	});
});