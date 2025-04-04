"use client";
import React from "react";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}

/*
The layout.tsx file in your Next.js project is functioning as the root layout for all pages in the app directory. It ensures that:

The Navbar Component:

The Navbar is included on every page because it is rendered at the top of the layout.
The children Prop:

The children prop represents the content of the specific page being rendered (e.g., page.tsx for the homepage, cart/page.tsx for the cart page, etc.).
This content is dynamically injected into the {children} placeholder in the layout.
Global Structure:

The <html> and <body> tags wrap the entire application, ensuring a consistent structure across all pages.
How It Works
When you navigate to a page (e.g., /cart or /checkout), Next.js:

Uses the layout.tsx file to wrap the page content.
Injects the content of the specific page (e.g., cart/page.tsx) into the {children} placeholder in the layout.
For example:

If you visit /cart, the CartPage component from cart/page.tsx will be rendered inside the {children} placeholder in layout.tsx.
The Navbar will always appear at the top because it is part of the layout.

Why This is Useful
Consistency: The Navbar and other global elements (like styles or metadata) are automatically included on every page.
Reusability: You don't need to manually add the Navbar or other shared components to each page.
Separation of Concerns: Each page (page.tsx) only defines its specific content, while the layout handles the overall structure.

Question:
Is it best practice to place the navbar as a element in the bode, and children in main?

Answer:
Yes, placing the Navbar as a direct child of the <body> and keeping the children inside the <main> tag is considered a good practice. This structure ensures semantic HTML and proper accessibility, which are important for both users and search engines.

Why This is Best Practice
Semantic HTML:

The <main> tag is intended to contain the main content of the page, which is represented by the children prop in your layout.
The <nav> element (or the Navbar component) is typically placed outside the <main> tag because it is not part of the main content but rather a global navigation element.
Accessibility:

Screen readers and other assistive technologies rely on semantic HTML to help users navigate the page. Placing the Navbar outside the <main> tag ensures that it is recognized as a navigation element and not part of the main content.
Consistency:

This structure keeps the layout consistent and makes it easier to manage global elements like the Navbar or a footer.

Benefits of This Approach
Improved Accessibility: Screen readers can easily distinguish between navigation and main content.
SEO Optimization: Search engines can better understand the structure of your page.
Maintainability: The layout is clean and easy to extend if you need to add other global elements like a footer.
*/