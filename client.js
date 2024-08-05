TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
      return [
        {
          icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
          text: "Una240805-1",
          callback: function (t) {
            return t.card('id') .then (function(card) {
              //login member when press button
              return t.member('id') .then (function(member) {
                return t.popup({
                  title: 'GetCard',
                  url: `estimate.html?id=${card.id}&member=${member.id}`
                });
              });
            });
            
          },
        },
      ];
    },
      
  });

  