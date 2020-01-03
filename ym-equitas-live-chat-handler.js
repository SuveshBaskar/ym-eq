(function() {
  window.addEventListener(
    'message',
    function(event) {
      try {
        var event = JSON.parse(event.data);
        if (event.event_code === 'custom-event') {
          console.log(event.data, 'data');
          document.getElementById('ymPluginDivContainerInitial').style.display =
            'none';
        }
      } catch (error) {
        console.log('Error Parsing DATA');
      }
    },
    false
  );
})();
