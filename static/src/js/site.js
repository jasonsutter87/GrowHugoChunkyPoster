(function() {
    console.log('ready')
    setTimeout(function(){
      const links = document.getElementsByTagName('a')
      const currentUrl = location.href
      for (const link of links) {
        if (link.href === currentUrl) {
          link.classList.add('active')
        }
      }
    }, 1);
}())
