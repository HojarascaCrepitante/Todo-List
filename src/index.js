import initialPage from "./initialPageLoad";
import {loopThroughArray, addListener,retrieve} from "./Logic"

document.body.appendChild(initialPage())

loopThroughArray()
retrieve()
addListener()

