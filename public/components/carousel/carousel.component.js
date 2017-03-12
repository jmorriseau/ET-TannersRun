angular.module('tanner').component('tbCarousel', {
    restrict: 'E',
    bindings: {
      showBullets: '@?',
      showContent: '@?'
    },
    templateUrl: 'components/carousel/carousel.html',
    controller: CarouselCtrl
});

function CarouselCtrl(){
  this.slideIndex = 0;
  this.sliderData = [
    {
      title: 'slide 1',
      text: 'this is slide one',
      img: 'images/tb1.jpeg'
    },
    {
      title: 'slide 2',
      text: 'this is slide two',
      img: 'images/tb2.jpeg'
    },
    {
      title: 'slide 3',
      text: 'this is slide three',
      img: 'images/tb3.jpeg'
    },
    {
      title: 'slide 4',
      text: 'this is slide four',
      img: 'images/tb4.jpeg'
    },
    {
      title: 'slide 5',
      text: 'this is slide five',
      img: 'images/tb5.jpeg'
    },
    {
      title: 'slide 6',
      text: 'this is slide six',
      img: 'images/tb6.jpeg'
    },
    {
      title: 'slide 7',
      text: 'this is slide seven',
      img: 'images/tb7.jpeg'
    },
    {
      title: 'slide 8',
      text: 'this is slide eight',
      img: 'images/tb8.jpeg'
    },
    {
      title: 'slide 9',
      text: 'this is slide nine',
      img: 'images/tb9.jpeg'
    },
    {
      title: 'slide 10',
      text: 'this is slide ten',
      img: 'images/tb10.jpeg'
    }
  ];

  this.nextSlide = function(){
    if((this.slideIndex + 1) != this.sliderData.length){
      this.slideIndex++;
    }
    else {
      this.slideIndex = 0;
    }
  }

  this.prevSlide = function(){
    if(this.slideIndex != 0){
      this.slideIndex--;
    }
    else {
      this.slideIndex = this.sliderData.length-1;
    }
  }

  this.$postLink = function(){
    this.showBullets = this.showBullets || 'true';
    this.showContent = this.showContent || 'true';
  }
}
