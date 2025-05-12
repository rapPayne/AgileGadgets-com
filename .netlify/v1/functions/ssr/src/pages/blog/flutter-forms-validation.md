---
layout: ../../layouts/BlogPost.astro
title: Flutter Forms Validation - the Ultimate Guide
date: 2020-10-24
author: Rap Payne
description: Form validation in Flutter is wierdly complicated. Let's create a fun li'l app that validates user input.
tags: [flutter, dart]
time-to-read: 20 minutes
url: /blog/flutter-forms-validation
cloudinaryImageFileName: v1745004223/phone_app_nqaqec.jpg
---

# Flutter Forms Validation - the Ultimate Guide
You've joined an innovative new company called Prestige Worldwide to create their app using Flutter. It's a great app that lets your users register with their email address and password. You release the app to great fanfare, it goes viral and 10,000 people register on day one.

Fortune and fame await you! Sounds good so far? Not so fast, cowboy.

It turns out that half of your users gave you email addresses like "*none of your business*" and "*you can't have my email*". The other half have passwords so weak they're bound to be cracked within a day or two, exposing Prestige Worldwide to fraud.

![Unvalidated data => bad data in our database and unhappy users](https://miro.medium.com/v2/resize:fit:496/format:webp/1*dMxUjJJhY_LykBjb-Tafcw.png)

Alas! If only you'd put data validation into your forms, your reputation and bank balance would've been safe.

In this tutorial, you'll learn:
- How to implement validations without a form.
- How to implement validations with a form.
- How to implement validations on non-textfields.
- How to autovalidate forms on user input.
- How to control form flow with FocusNodes.

---
> Note: This tutorial assumes you're already be familiar with Flutter development. If you're new to Fluter, take a look at this <a href="https://github.com/Solido/awesome-flutter" target="_blank" rel="noopener noreferrer">awesome list</a>, watch one of the Flutter team's videos <a href="https://www.youtube.com/channel/UCwXdFgeE9KYzlDdR7TG9cMw" target="_blank" rel="noopener noreferrer">here</a>, or pick up my Flutter <a href="https://www.amazon.com/Flutter-App-Development-Write-Android/dp/B0D5GYDP1N" target="_blank" rel="noopener noreferrer">book</a>. Hope these help you get started.
---

## Getting Started
You can get the starter project from github <a href="https://github.com/rapPayne/flutter-forms-validation" target="_blank" rel="noopener noreferrer">here</a>. There's a <a href="https://github.com/rapPayne/flutter-forms-validation/tree/master/final" target="_blank" rel="noopener noreferrer">completed project</a> and a <a href="https://github.com/rapPayne/flutter-forms-validation/tree/master/starter" target="_blank" rel="noopener noreferrer">starter</a> so you can work along with the tutorial in the steps below.

Open the starter project in Visual Studio Code or Android Studio by navigating to the starter folder. Click *Get dependencies* or *Get pub*. Build and run the app, and you will see a form that's ready to go, except for validations.

![Our starter, a registration form that is unvalidated](https://miro.medium.com/v2/resize:fit:504/format:webp/1*-69nrf5QRuw0BU2hFOfnvw.png)

Enter some bad data like a one-character email address and password. Tap the save floating action button in the lower right corner and look in the Debug Console. This is the message it prints:

```text
The user has registered with an email address of 'null' and a 
password of 'null'
```

Your app approved the data and pretended to submit it to your server. That's not good! The app should refuse to submit until the data is good.
The best solution is to validate the data using a Flutter Form widget.

## Why Use a Form?
In Flutter, you have two options for collecting user data:

| Without a Form                          | With a Form                          |
|-----------------------------------------|--------------------------------------|
| Simpler but...                          | More complex but...                  |
| You have very little control over the fields | You have lots of control over the fields |
| Fields are unaware of each other        | Field data can be evaluated as a group |
| Validations are manual so you have to write more code | Validations are easier because they're declarative |


You can choose an option by asking yourself a quick question: *Do I have a simple field or two or do I have more advanced requirements?* If you have a simple field or two then do yourself a favor and use the first option (No Form). You can achieve this with a `TextField` widget. If you have more advanced requirements, you'll need a `Form` widget.
With that out of the way, it's time to use a `Form` widget.

## Adding a Form
Open *Register.dart* and you'll see the following:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: Text("Prestige Worldwide Registration")),
    // TODO 1: Wrap the body in a Form widget
    body: Container(
      alignment: Alignment.center,
      child: Column(
        children: <Widget>[
          _buildEmailField,
          _buildPasswordField,
          _buildPasswordConfirmationField,
          _buildAgreeToTermsField,
        ],
      ),
    ),
    floatingActionButton: FloatingActionButton(
      child: Icon(Icons.save),
      onPressed: _doRegister,
    ),
  );
}
```

Find the line with `TODO 1:` and wrap the `Container` with `Form` like this:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: Text("Prestige Worldwide Registration")),
    // TODO 1: Wrap the body in a Form widget
    body: Form(  // <-- Add this widget. (Don't forget to close it!)
      child: Container(
        alignment: Alignment.center,
        child: Column(
          children: <Widget>[
            _buildEmailField,
            _buildPasswordField,
            _buildPasswordConfirmationField,
            _buildAgreeToTermsField,
          ],
        ),
      ),
    ),
    floatingActionButton: FloatingActionButton(
      child: Icon(Icons.save),
      onPressed: _doRegister,
    ),
  );
}
```

If you rebuild and run the app at this point, you won't see any difference. Like <form>s on the web, `Form` doesn't show visibly but adds a ton of capability. You access much of that capability with the `key` property.

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*2gGRlYU7MZVn0Iqy" style="width: 100%;" alt="Many random keys" />

## What Are Keys?
Every Flutter widget has a key. Keys help Flutter keep track of where and how to redraw widgets most efficiently.

Sometimes you assign a `key` value, but usually you can safely ignore them. Omitting unnecessary keys makes your code tighter and simpler. For example, Stateless Widgets do not require keys because their internal state never changes. Flutter already knows to redraw them only if an ancestor widget needs to be redrawn.

Occasionally stateful widgets are assigned keys so Flutter knows what to redraw if its internal state changes.

---
> Note: Keys are an in-depth and tricky subject. If you want a deeper dive into keys, check out this <a href="https://www.youtube.com/watch?v=kn0EOS-ZiIc" target="_blank" rel="noopener noreferrer">video</a>.
---

For this article, we're going to focus on a particular key subclass, the `GlobalKey`. These keys are specifically designed to work with `StatefulWidgets` and enable other widgets to access the widget's state through a property called *currentState*.

A form's `FormState` has two methods, `validate()` and `save()`, which open the form's world to data validation and interdependence.

## Setting a Key on a Form
Just above `build`, locate the line with `TODO 2:`

```dart
// TODO 2: Add a GlobalKey

@override
Widget build(BuildContext context) {
```

Add `GlobalKey` to the stateful widget as shown here:
```dart
// TODO 2: Add a GlobalKey declaration
GlobalKey<FormState> _key = GlobalKey<FormState>();
```

In the `Form`, just above `child`, add `key` and assign it the newly created `_key` variable:
```dart
key: _key, // ← Add this line
```

After adding the `key` line, it'll look like this:
```dart
body: Form(
  key: _key, // ← Add this line
  child: Container(
```

Now that the `Form` has a `key`, you can validate the data. Even better, if validation fails for any reason, you can abort the saving and submission.

Locate the `TODO 3:` in `_doRegister()`:
```dart
void _doRegister() {
  // TODO 3: Add validation and saving here
  print("""
    The user has registered with an email address of '${_loginObject['email']}'
    and a password of '${_loginObject['password']}'
  """);
}
```

Replace the entire `_doRegister` method with:
```dart
void _doRegister() {
  // TODO 3: Add validation and saving here
  // 1
  if (_key.currentState.validate()) {
    // Commit the field values to their variables
    // 2
    _key.currentState.save();
    // 3
    print("""
      The user has registered with an email address of '${_loginObject['email']}'
      and a password of '${_loginObject['password']}'
    """);
  }
}
```

Here's a breakdown of the method updates:
1. Implements the check-and-save by wrapping validation in an if statement.
2. Attempt to save data.
3. As of now, if validation fails, the print statement never hits. Very soon, you'll change this when you add the validation code.

## How save() and validate() Work
A `Form` wraps its individual fields. When the `Form` validates, all of its fields validate and when it saves, all of the fields save as well.

Before adding the code to validate and save, you should review some theory.

When you call `save()` on the `Form`'s state, Flutter runs `onSaved()` for each field. So you must write `onSaved()` for each field using this syntax:

```dart
onSaved: (val) {
  // Do something with 'val' here. Return nothing from the 
  // function - it's a void.
}
```

Similarly, when you call `validate()` on the `form`'s state, Flutter runs `validator()` for each field. The `validator()` syntax might look like this:

```dart
validator: (val) {
  // Test 'val' here. If it's invalid somehow, return a string,
  // an error message describing the problem. Return null if
  // the data is valid.
}
```

Ready to include validation for your app? It's the subject of this article, after all.
<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*QxM_Y1SRKmVKJgAp" style="width: 100%;" alt="Woman looking through binoculars" />

## Validating a Simple TextFormField
Add a validation method. Type this method into your class, before `_doRegister()`:

```dart
String _validateEmail(String email) {
  // 1
  RegExp regex = RegExp(r'\w+@\w+\.\w+'); // translates to word@word.word
  // 2
  if (email.isEmpty)
    return 'We need an email address';
  else if (!regex.hasMatch(email))
    // 3
    return "That doesn't look like an email address";
  else
    // 4
    return null;
}
```

Here's what this code does:
1. Regular expressions can be used to match strings or parts of strings. In this case the string's `r` prefix signifies the use of a raw string and the `\w` is shorthand for word. So the translation for this string is `word@word.word`.
2. For more details see the Dart <a href="https://api.dart.dev/stable/2.8.4/dart-core/RegExp-class.html" target="_blank"  rel="noopener noreferrer">RegExp docs</a>.
3. If the email address is empty, tell the user to give you something.
4. If what the user gives you isn't shaped like an email address, tell them.
5. Otherwise, what they gave you must be alright, so return a null string.

At this point, you're ready to associate the validator with the email field except for one problem: A `TextField` widget isn't, strictly speaking, a `FormField`.

Fortunately, Flutter provides a widget that combines the properties of a `TextField` widget and a `FormField` widget. It's, unsurprisingly, named a `TextFormField` widget.

---
> Note: You can read more about these different classes and the respective properties and methods in the Flutter <a href="https://api.flutter.dev/flutter/material/TextField-class.html" target="_blank"  rel="noopener noreferrer">TextField</a>, <a href="https://api.flutter.dev/flutter/widgets/FormField-class.html" target="_blank"  rel="noopener noreferrer">FormField</a> and <a href="https://api.flutter.dev/flutter/material/TextFormField-class.html" target="_blank"  rel="noopener noreferrer">TextFormField</a> docs.
---

To implement the validation you need to convert all three `TextField` widgets to `TextFormField` widgets. They're all marked with `TODO 4:`. Find them in `_buildEmailField`, `_buildPasswordField` and `_buildPasswordConfirmationField`.

Before change:
```dart
// TODO 4: Change to a TextFormField
return TextField(
```

After change:
```dart
// TODO 4: Change to a TextFormField
return TextFormField(
```

Finally, you can now validate and save your email data. In `_buildEmailField`, locate `TODO 5:` and replace it with this:
```dart
// TODO 5: Add onSaved and validator methods
// 1
onSaved: (String val) => _loginObject['email'] = val,
// 2
validator: _validateEmail,
```

Here's a breakdown:
1. This copies the value in the field to a local variable that you'll use later to persist the data.
2. This attaches your `_validateEmail` to the validator property.

After building and running your app, enter a bad email address.

When you tap save an error message will show on the screen and you won't see the Debug Console submission message.

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Wz0LKDeqTugbDQLjEECXkQ.png" style="width: 100%;" alt="Form with email of You can't have my email address, yo." />

Now build and run the app again. Put in a good email address. No error message appears on the screen, but you do see the Debug Console submission message because you haven't implemented the password validation yet.
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-WYGpC9nsTEuVzHH8u0UVQ.png" style="width: 100%;" alt="Form with email of dale.doback@prestigeWorldwide.com" />

Cool, right? Let's go validate that password!

## Validating Password
When adding validation to the password field, you need to make sure your users' passwords are secure. Add a new method that ensures their passwords meet your security requirements.

Create a new `_validatePassword` by adding the following code after `_validateEmail`:
```dart
String _validatePassword(String pass1) {
  // 1
  RegExp hasUpper = RegExp(r'[A-Z]');
  RegExp hasLower = RegExp(r'[a-z]');
  RegExp hasDigit = RegExp(r'\d');
  RegExp hasPunct = RegExp(r'[!@#\$&*~-]');
  // 2
  if (!RegExp(r'.{8,}').hasMatch(pass1))
    return 'Passwords must have at least 8 characters';
  // 3
  if (!hasUpper.hasMatch(pass1))
    return 'Passwords must have at least one uppercase character';
  // 4
  if (!hasLower.hasMatch(pass1))
    return 'Passwords must have at least one lowercase character';
  // 5
  if (!hasDigit.hasMatch(pass1))
    return 'Passwords must have at least one number';
  // 6
  if (!hasPunct.hasMatch(pass1))
    return 'Passwords need at least one special character like !@#\$&*~-';
  // 7
  return null;
}
```

This method:
1. Sets up variables for the specific password rules your app requires.
2. Checks password length.
3. Confirms there's at least one uppercase character.
4. Verifies there's at least one lowercase character.
5. Determines if there's at least one number.
6. Confirms there's at least one special character.
7. If the entered password passes all the checks then the method returns `null` to signify there's no message to return.

Now it's time to add the new password validation to `_buildPassword`. Find `TODO 6:` and replace it with:

```dart
// TODO 6: Add onSaved and validator methods to the password field
onSaved: (String val) => _loginObject['password'] = val,
validator: _validatePassword,
```

Go ahead and test the password validation. All you have done so far covers validating simple fields, but what happens when two or more fields depend on each other? You'll learn that next!

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*KHZhNifkgg0iCa0V" style="width: 100%;" alt="Two people shaking hands" />

## Validating Two Interdependent Fields
The password confirmation field should be the same as the password field's contents. Make sure they match by creating a validator that compares the two.

Type this method below `_validatePassword`.

```dart
String _validatePasswordConfirmation(String pass2) {
  return (pass2 == _pass1) ? null : "The two passwords must match";
  // Note that _pass1 is populated when a password is entered
}
```

Now, associate this new method in `_buildPasswordConfirmationField`'s validator. Locate `TODO 7` and replace it with:

```dart
// TODO 7: Validate the password confirmation here
validator: _validatePasswordConfirmation,
```

As you can see, text validations are simple to add once you have the Form started. But what if the field isn't a text field?

## Validating a Field That Isn't Text
Remember, having a `Form` wrap `FormField`s is what makes all of this magic happen.
Flutter created an awesome tool with `TextFormField` that combines a `TextField` with a `FormField`. Unfortunately, there's nothing similar for `Radio`, `Checkbox`, `Slider` and `DropdownButton`.

For these other widgets, you have to use a low-level `FormField`. Yes, it's more complicated, but you're a smart developer, so it's nothing you can't handle.

## Validating a Checkbox
Before you update the code to do the validation, you need the validator code. Add this `_validateTerms` after `_validatePasswordConfirmation` which confirms the user has agreed to the terms:
```dart
String _validateTerms(bool agree) {
  return agree ? null : "You must agree before proceeding";
  // It's invalid if the user hasn't opted in by checking the box
}
```

To use the newly created `_validateTerm`, locate `TODO 8:` in `_buildAgreeToTermsField`. Notice it's a simple `Column()` with a `Row()` containing a `Checkbox` with `Text()`.
```dart
Widget get _buildAgreeToTermsField {
  // TODO 8: Wrap the Column with a FormField<bool>
  return Column(
    children: <Widget>[
      Row(
        children: <Widget>[
          Checkbox(
            value: _agree,
            onChanged: (bool val) => setState(() {
              _agree = val;
            }),
          ),
          const Text("I agree to the terms."),
        ],
      ),
    ],
  );
}
```

Replace the entire `_buildAgreeToTermsField` with:
```dart
Widget get _buildAgreeToTermsField {
  // TODO 8: Wrap the Column with a FormField<bool>
  return FormField<bool>(
    // 1
    initialValue: _agree,
    // 2
    builder: (FormFieldState<bool> state) {
      return Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              Checkbox(
                // 3
                value: state.value,
                onChanged: (bool val) => setState(() {
                  // 4
                  _agree = val;
                  // 5
                  state.didChange(val);
                }),
              ),
              const Text("I agree to the terms."),
            ],
          ),
          // 6
          state.errorText == null
          ? Text("")
          : Text(state.errorText, style: TextStyle(color: Colors.red)),
        ],
      );
    },
    // 7
    validator: (val) => _validateTerms(_agree),
  );
}
```

This is what you just did:
1. A `FormField` has an `initialValue`. You set it to a class-level private boolean.
2. A `FormField` takes a `builder` that has a *state* representing the state of the field.
3. The enclosed field absorbs the value of the `FormField`'s state.
4. When it changes, set the class's private `_agree` property and render this widget again.
5. This triggers the `FormField` to register a change to its child's value. Without this, the `FormField` is never told the thing it encloses has been altered.
6. If there's an errorText, show it. If not, show nothing. This `errorText` is set by the `validator` returning a string.
7. And finally, call the `validator`.

Build the app, run it and try to submit without agreeing to the terms. This is the error message you will see:
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*YUcEXW_v-UyiwORBamDRDw.png" style="width: 100%;" alt="Form with an unchecked I agree to terms checkbox and an error message saying You must agree before proceeding" />

Once you've agreed to the terms, it passes the validation. As before, the simulated submission in the IDE's debug console will display:

```text
The user has registered with an email address of 'whatever email address entered' and a password of 'whatever password was entered'
```

## Taking it a Step Further: Autovalidate
You have enough at this point to handle any validation with some practice. But there are a couple of cool techniques that require a little code for a giant impact. One technique is autovalidation.

*Autovalidation* occurs when the user makes any change to the data. They don't have to submit the form to kick off the validation: Typing one character fires the validators.

Autovalidation can be annoying when the user first fills out a form. Imagine if you entered one lonely character in the first field and suddenly error messages show up for every field. Wouldn't that feel rude?

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*5b0Z3VebiW03xFRZ" style="width: 100%;" alt="Man stretching with woman rudely putting her hand in his face" />

But after the user tries to submit the form they would want to know if they have data problems. You want to assist them in submitting the form, not scold them for doing it wrong.

So keep autovalidation off until after the first submission attempt and then only turn it on after the initial submission.

## Adding Autovalidation
Before adding autovalidation you need to add a new variable to the top of the class just before the `_key` declaration and set it to `false`. This turns off autovalidation:
```dart
bool _autovalidate = false; // Should the form validate after 
                            // every user action?
```

Next, turn on autovalidation by adding `autovalidate` to the `Form` above the `key`:
```dart
body: Form(
  autovalidate: _autovalidate, // ← Add this line
  key: _key,
```

At this point, validation is off by default. Turn it on by adding the following as the first thing inside `_doRegister()`:
```dart
// After the first attempt to save, turn on autovalidate to 
// give quicker feedback to the user
setState(() => _autovalidate = true); // ← Add this line
```

Now, after the user initially submits the form the autovalidation flag is flipped from false to true.

Build and run your app. You will see if you enter bad data you won't get feedback until you submit. Then you'll get error messages after each change to the data no matter how small the change.

## Controlling Focus With FocusNodes

You can make your forms super useful by taking advantage of your ability to direct the user's focus on fields. For instance, when the form first comes up, the user shouldn't have to tap the email field before entering data. It's obvious to them that they should enter data into the fields so why not put them in the email field?

Likewise, after they attempt to submit with bad data in a particular field, shouldn't you toss their focus to that field?

Set the first field a user visits by turning on `autofocus` on one field. Moving a user programmatically to another field is a little more challenging, but you can do it with a `FocusNode`.

Next, you'll create one `FocusNode` object for each field. Then call `requestFocus()` on that object to push the user's focus there.

## Adding Focus Control to Your Form
To have the email field be the default first field, find `TODO 9` in `_buildEmailField` and replace it with:

```dart
// TODO 9: Add autofocus
autofocus: true,
```

Stop and restart your app. You'll realize the email field has the initial focus. No need to tap into it.

Not bad, right?
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*CFSgwutONcsfOkDc3UiX2A.png" style="width: 100%;" alt="Form with the email address field in focus" />

To place focus you need to create `FocusNode` instances. Add the following after the `_autovalidate` declaration at the top of the class:

```dart
final FocusNode _emailFocusNode = FocusNode();
```

Then associate this new `FocusNode` with the email field in `_buildEmailField()`. Find `TODO 10` and replace it with:

```dart
// TODO 10: Add a focusNode
focusNode: _emailFocusNode,
```

Now for the payoff. Find `_validateEmail()` and add this line after the `RegExp regex` line:

```dart
// Add the following line to set focus to the email field
if (email.isEmpty || !regex.hasMatch(email))   
  _emailFocusNode.requestFocus();
```

Essentially, this code says *If the user didn't give an email or if what they gave is bad, give the email field focus the next time you get a chance*.

Here's what it looks like in context with the previously updated `_validateEmail`:
```dart
String _validateEmail(String email) {
  // 1
  RegExp regex = RegExp(r'\w+@\w+\.\w+');
  // Add the following line to set focus to the email field
  if (email.isEmpty || !regex.hasMatch(email)) _emailFocusNode.requestFocus();
  // 2
  if (email.isEmpty)
    return 'We need an email address';
  else if (!regex.hasMatch(email))
    // 3
    return "That doesn't look like an email address";
  else
    // 4
    return null;
}
```

Of course in a production app you don't need console print outs. So for a production app remove or comment out `print` in `_doRegister()`.

---

## Where to Go From Here?

That was a lot to learn! Congratulations on finishing strong. Here are your key takeaways in today's lesson:

- Validations require a `Form` which in turn requires FormField widgets.
- The `Form` needs a `GlobalKey` so it can expose `currentState` that has a `save()` and a `validate()`.
- When `currentState.save()` is called, it looks through all of the `FormField` children and runs the field's respective `onSaved()`.
- When `currentState.validate()` is called, it calls each `FormField`'s `validate()`.
- If all validations return a `null` you consider all of the data to be valid, but if one or more return a string, that string is interpreted to be an error message.
- You usually reserve the `currentState.save()` call until after all validations pass.

As a bonus, you learned how to set focus through `autofocus` and `FocusNodes`.
Want to learn more about Flutter forms?

- There's a to-the-point recipe for FocusNodes in the Flutter <a href="https://flutter.dev/docs/cookbook/forms/focus" target="_blank" rel="noopener noreferrer">FocusNode docs</a>.
- Learn about FocusNodes in this <a href="https://medium.com/flutter-commuadfsdnity/a-deep-dive-into-flutter-textfields-f0e676aaab7a" target="_blank" rel="noopener noreferrer">Medium article</a>.
- There's a FreeCodeCamp.org <a href="https://www.freecodecamp.org/forum/t/how-to-validate-forms-and-user-input-the-easy-way-using-flutter/190377" target="_blank" rel="noopener noreferrer">article</a> with some good information.
- If you prefer books, chapter four of <a href="https://www.amazon.com/Flutter-App-Development-Write-Android/dp/B0D5GYDP1N" target="_blank" rel="noopener noreferrer">Flutter App Development: How to Write for iOS and Android at Once</a> covers forms, fields and more. I hear that the author is a good dude.

Check out the <a href="https://github.com/rapPayne/flutter-forms-validation/tree/master/starter" target="_blank" rel="noopener noreferrer">starter</a> and <a href="https://github.com/rapPayne/flutter-forms-validation/tree/master/final" target="_blank" rel="noopener noreferrer">completed</a> projects.

And feel free to reach out to the <a href="https://linkedin.com/in/rapPayne" target="_blank" rel="noopener noreferrer">author</a>. I'd love to connect with you!

<small>
Originally published on <a href="https://medium.com/flutter-community/flutter-forms-validation-the-ultimate-guide-1b469169ca6e" target="_blank" rel="noopener noreferrer">Medium</a> on October 24, 2020.
</small>