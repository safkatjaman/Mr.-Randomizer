/* Working with the array input */
      var printingOutput = "";

      function takeFriendName() {
            var friendArray = [];

                  friendArray.push(document.getElementById('friend1').value),
                  friendArray.push(document.getElementById('friend2').value),
                  friendArray.push(document.getElementById('friend3').value),
                  friendArray.push(document.getElementById('friend4').value),
                  friendArray.push(document.getElementById('friend5').value)

            /* console.log(friendArray); */


            /* Friend Array Sorting To Randomize The Names */
            var friendSortedArray = friendArray.sort();


            for (let i = 0; i < friendSortedArray.length; i++) {
                  var takenInput = friendSortedArray[i];

                  printingOutput += "<li>" + takenInput + "</li>";

                  document.getElementById('friendsNameRandomized').innerHTML = printingOutput;
            }
      }

/* Reload Button */
      document.querySelector('.reloadButton').addEventListener('click', function() {
            location.reload();
      })

