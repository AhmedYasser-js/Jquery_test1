$ (document).ready (function () {
  var firstSectionHeight = $ ('#Home').height (); // Get the height of the first section

  // Check scroll position and show/hide button
  $ (window).scroll (function () {
    if ($ (this).scrollTop () > firstSectionHeight) {
      $ ('#btnUp').removeClass ('d-none'); // Show button
    } else {
      $ ('#btnUp').addClass ('d-none'); // Hide button
    }
  });

  // Smooth scroll to top when button is clicked
  $ ('#btnUp').click (function () {
    $ ('html, body').animate ({scrollTop: 0}, 'slow');
  });
});
// *==============*
const sidebarWidth = $ ('#sidebar').width ();
// Check if localStorage has a value for the sidebar state
const savedSidebarState = localStorage.getItem ('sidebarState');

// If a value exists, use it to set the initial state
if (savedSidebarState === 'open') {
  $ ('#sidebar').css ('left', '0');
} else {
  $ ('#sidebar').css ('left', `-${sidebarWidth}px`);
}

// Function to save the sidebar state to localStorage
function saveSidebarState (state) {
  localStorage.setItem ('sidebarState', state);
}

// Handle close button click
$ ('#close').click (function () {
  $ ('#sidebar').animate ({left: `-${sidebarWidth}px `}, 'slow');
  $ ('html, body').animate ({scrollTop: 0}, 'slow');
  saveSidebarState ('closed'); // Save the closed state
});

// Handle toggle button click
$ (document).ready (function () {
  var sidebarOpen = false; // Initialize the sidebar state

  $ ('.toggle-btn').click (function () {
    if (sidebarOpen) {
      // If the sidebar is open, close it
      $ ('#sidebar').animate ({left: '-252px'}, 'slow'); // Adjust '-250px' based on the sidebar width
      saveSidebarState ('closed'); // Save the closed state
    } else {
      // If the sidebar is closed, open it
      $ ('#sidebar').animate ({left: '0'}, 'slow');
      saveSidebarState ('open'); // Save the open state
    }
    sidebarOpen = !sidebarOpen; // Toggle the sidebar state
  });
});

// & ========== &
$ ('.sidebar-content a[href^="#"]').click (function () {
  let aHref = $ (this).attr ('href');
  console.log (aHref);
  let linkOffest = $ (aHref).offset ().top;
  console.log (linkOffest);
  $ ('html, body').animate ({scrollTop: linkOffest}, 200);
});

// *==============*

$ ('.slideDown-content h3').click (function () {
  $ ('.slideDown-content p').not ($ (this).next ()).slideUp (500);
  $ (this).next ().slideToggle (500);
});

// *==============*

let sectionOffset = $ ('#Duration').offset ().top;
function stayColor () {
  let windowScroll = $ (window).scrollTop ();
  if (windowScroll > sectionOffset - 100) {
    $ ('#btnUp').removeClass ('d-none');
  } else {
    $ ('#btnUp').addClass ('d-none');
  }
}
stayColor ();
$ (window).scroll (() => stayColor ());
// &===========&
$ ('#btnUp').click (function () {
  $ ('html, body').animate ({scrollTop: 0}, 'slow');
});

// *==============*

$ ('textarea').keyup (function () {
  let textareaLength = $ (this).val ().length;

  if (100 - textareaLength <= 0) {
    $ ('#counter').text ('Your available characters have finished');
  } else {
    $ ('#counter').text (100 - textareaLength);
  }
});

// *===========*

$ (document).ready (function () {
  countDownToTime ('September 22, 2023 21:10:15');

  function countDownToTime (countTo) {
    let futureDate = new Date (countTo).getTime () / 1000;
    let now = new Date ().getTime () / 1000;
    let timeDifference = futureDate - now;

    let days = Math.floor (timeDifference / (24 * 60 * 60));
    let hours = Math.floor ((timeDifference - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor (
      (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
    );
    let secs = Math.floor (
      timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
    );

    $ ('.days').html (`${days} D`);
    $ ('.hours').html (`${hours} h`);
    $ ('.minutes').html (`${mins} m`);
    $ ('.seconds').html (`${secs} s`);

    setInterval (function () {
      countDownToTime (countTo);
    }, 1000);
  }
});
