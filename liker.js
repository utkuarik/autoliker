const minTime = 4000; // Minimum time interval between swipes
const maxTime = 2000; // Maximum time interval between swipes

/**
 * Simulates a DOM event on a target element.
 * @param {HTMLElement} target - The target element.
 * @param {string} etype - The type of event to be fired.
 */
function eventFire(target, etype) {
  if (target.fireEvent) {
    target.fireEvent(`on${etype}`);
  } else {
    const evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    target.dispatchEvent(evObj);
  }
}

/**
 * Generates a random time interval between swipes.
 * @param {number} min - The minimum time in milliseconds.
 * @param {number} max - The maximum time in milliseconds.
 * @returns {number} - The random time interval.
 */
function getNextSwipeTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Initiates the swiping process.
 */
function startSwiping() {
  const divElements = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a");
  const divElementsDislike = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a");
  const likeBtn = divElements[0];
  const dislikeBtn = divElementsDislike[0];
  const nextSwipeTime = getNextSwipeTime(minTime, maxTime);
  console.log('Next Swipe is in', nextSwipeTime, 'milliseconds');

  if (!likeBtn) setTimeout(startSwiping, nextSwipeTime); // If like button is not found, retry after the specified time

  setTimeout(function() {
    console.log("Waiting for 3 seconds.");
    checkBio();
  }, 3000); // Wait for 3 seconds before checking the bio information

  var randNumber = Math.random(); // Generate a random number between 0 and 1

  if (randNumber < 0.9) {
    eventFire(likeBtn, 'click'); // Click the like button with a 90% probability
    console.log('Button clicked: Like');
  } else {
    eventFire(dislikeBtn, 'click'); // Click the dislike button with a 10% probability
    console.log('Button clicked: Dislike');
  }

  setTimeout(startSwiping, nextSwipeTime); // Schedule the next swipe
}

/**
 * Checks the bio information of a profile.
 */
function checkBio() {
  const divElementsBio = document.getElementsByClassName("P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px)--ml Mb(8px) focus-button-style");
  const bioBtn = divElementsBio[0];
  const nextSwipeTime = getNextSwipeTime(minTime, maxTime);
  if (!bioBtn) setTimeout(checkBio, nextSwipeTime); // If bio button is not found, retry after the specified time

  try {
    eventFire(bioBtn, 'click'); // Click the bio button
  } catch (error) {
    // Handling the exception
    // console.log("An error occurred: " + error);
    // You can choose to exit the function or continue execution here
  }

  setTimeout(function() {
    console.log("This is the second line after 1 second.");
  }, 1000);

  var divElement = document.getElementsByClassName("Px(16px) Py(12px) Us(t) C($c-ds-text-secondary) BreakWord Whs(pl) Typs(body-1-regular)");
  if (divElement.length > 0) {
    const bio = divElement[0];

    console.log(divElement[0].innerText);

    setTimeout(function() {
      console.log("If condition.");
    }, 3000);

    var backElement = document.getElementsByClassName("End(12px) B(-20px) Pos(a) Z(2) CenterAlign Bdrs(50%) P(0) Scale(1.1):h Trsdu($normal) focus-button-style")
    if (backElement.length > 0) {
      eventFire(backElement[0], 'click'); // Click the back button to return to the previous screen
    }
  } else {
    setTimeout(function() {
      console.log("else condition .");
    }, 3000);

    var backElement = document.getElementsByClassName("End(12px) B(-20px) Pos(a) Z(2) CenterAlign Bdrs(50%) P(0) Scale(1.1):h Trsdu($normal) focus-button-style")
    if (backElement.length > 0) {
      eventFire(backElement[0], 'click'); // Click the back button to return to the previous screen
    }

    // Perform a "dislike" action if bio is empty
    const divElementsDislike = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a");
    const dislikeBtn = divElementsDislike[0];
    if (dislikeBtn) {
      eventFire(dislikeBtn, 'click'); // Click the dislike button
      console.log('Button clicked: Dislike');
    }
    return;
  }
}

startSwiping(); // Start the swiping process
