# React Router ?
With the help of react router framework we can load different code on our page without re-reder it again. 
It means when we have generally numbers of linked links on the navigation bar having diff diff pages then all pages has been created with html but with the help of react router we can make everything available on the single page and data will be manipulated without re-rendering. Means if we want to went to contact page from home page then we can go without re-rendering the current home page.

# routes ke andar jitne v component hai usme se sirf ek hi webpage pr render hoga.

<!--todo import {BrowserRouter, Routes, Route, Link} from "react-router"; -->


<!-- ! Default Page-->
<!-- <Route path="/" element={<Home/>}></Route> -->
<!-- ! After that path given to each component -->
<Route path="/Contact" element={<Contact/>}></Route>

<!-- ! Using Link tag we're Creating link on the webpage why ? -->
It's internal implementation of react router, however our browser can understand only html , css and js . so you can verify it that while inspecting on browser link tak has been converted into anchor tag.

<!-- ! How to create nested path like: -->
<!--  https://www.swiggy.com/restaurants --> single path
<!-- https://www.swiggy.com/city/patna/pizza-hut-kankar-bagh-kankarbagh-rest725082 --> Nested path

<Route path="/Details" element={Details()}>
    <Route index element={<Zero/>}></Route>
    <Route path="Hello" element={<Hello/>}></Route>
    <Route path="Hi" element={<Hi/>}></Route>
</Route>

http://127.0.0.1:1234/Details/

<!-- Default -->
It will load Zero component also
<!-- Manually -->
http://127.0.0.1:1234/Details/Hello
http://127.0.0.1:1234/Details/Hi
<!-- all these are nested path -->

<!--! Add OutLet in the component where you want to add nested component -->
# Firstly import { Outlet } from "react-router"; 
# the  call <Outlet></Outlet> In the body of function
<!-- Jha pr outlet mention hoga, component whi pr render hoga. -->
<!-- OutLet jis details ko user show krna chahta hai ushe catch kr leta hai aur render kr deta hai -->

<!-- ? Why / is being not given while providing path to the nested component -->
<!-- Since if we give / then it'll start searching path from root level. -->