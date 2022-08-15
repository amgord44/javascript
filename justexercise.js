/*const video = {
  title: 'a',
  tags: ['a','b', 'c'],
    showTags() {
      const self = this;
      this.tags.forEach(function(tag) {
      console.log(self.title, tag);
      }, this);
  }
};

video.showTags();*/

function playVideo(){
  console.log(this);

}

playVideo.call({name: 'Michelle'});
playVideo.apply({name: 'Michelle'});