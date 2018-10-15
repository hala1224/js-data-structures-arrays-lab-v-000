// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendDriver(name) {
      drivers.push(name);
      return drivers;
}
function destructivelyPrependDriver(name) {
      drivers.unshift(name);
      drivers;
}

  function destructivelyRemoveLastDriver() {
      drivers.pop(name);
      drivers;
      }
    
    function destructivelyRemoveFirstDriver() {
      drivers.shift(name);
      drivers;
    }
    
     function appendDriver(name) {
    
       const copyOfDrivers = drivers.slice();
       copyOfDrivers.push(name);
       return copyOfDrivers;
     }
     

      function prependDriver(name) {
      const copyOfDrivers = drivers.slice();
       copyOfDrivers.unshift(name);
       return copyOfDrivers;
      }

      function removeLastDriver() {
        const copyOfDrivers = drivers.slice();
        copyOfDrivers.push(name);
        return copyOfDrivers;
//       it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('removeFirstDriver()', function () {
//       it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });
//   });
// });