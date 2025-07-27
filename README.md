```diff
DEPRECATED: NO UPDATE WILL BE MADE IN THE FUTURE
```

![Exode](https://fontmeme.com/permalink/210712/c072cd76192d267f5d1729b84c1f1642.png)
```css
Note: Exode is currently in .Beta and can sometimes be in maintenance. @Unstable
```
```css
@Status: .custom_background unoperative
```


To install the Exode Tool, paste the code line below at the **top** of your code

```coffee
$.ajax("https://raw.githubusercontent.com/RubyDevil/Exode_OSM/main/Exode.js").done(eval).fail(console.log);
```

# Features

## Custom Editor
Exode allows you to customize your interface as you like. To perform modifications to the style of your editor, follow the example, and use options in the table below.
```
Editor = {
    <setting>: <option>
}
```

| Setting           | Description                                   | Options                                                                    | Working? (Updated 2025/7/27) |
|-------------------|-----------------------------------------------|----------------------------------------------------------------------------|------------------------------|
| custom_background | Alter the background of the main canvas       | ```URL``` **\|** ```Code: (1-40)```                                        | ❌                          |
| centerize_canvas  | Avoid the canvas from exceeding window limits | ```true``` **\|** ```false```                                              | ❌                          |
| text_color        | Set the **main** text color                   | ```Any CSS``` — [List](https://www.w3schools.com/colors/colors_groups.asp) | ✅                          |
| italic            | Set the **main** text style to italic         | ```true``` **\|** ```false```                                              | ⚠️ Breaks `text_color`      |



## Open Source Ship Models
```markdown
# In progress...
```


## Array Methods
The following methods are extended to **Array.prototype**, and can be used like the example below.
```js
[1,2,3,4].add(2) // => [3,4,5,6]
```
| Method          | Description                                                      | Working? (Updated 2025/7/27) |
|-----------------|------------------------------------------------------------------|------------------------------|
| `.add(x)`       | **Augment** each number in the array by `x` (negatives = reduce) | ✅                          |
| `.mult(x)`      | **Multiply** each number in the array by `x`                     | ✅                          |
| `.div(x)`       | **Divide** each number in the array by `x`                       | ✅                          |
| `.min(x)`       | Set the **minimal** value of each number in the array            | ✅                          |
| `.max(x)`       | Set the **maximal** value of each number in the array            | ✅                          |
| `.flat()`       | (`width` or `height`) Flatten the object to a 2D plane           | ✅                          |
| `.ignore([x])`  | Ignore all given values and set them to 0 (`x` is Array)         | ✅                          |
| `.replace(x,y)` | Replace all given values `x` by the value `y`                    | ✅                          |
| `.cleanTex()`   | Prevent all Textures `0` from rendering as a different Texture   | ✅                          |
| `.baseTex(Tex)` | Force all Textures `0` to render as Texture `Tex`                | ✅                          |
| `.step(s)`      | Details Comming soon                                             | ❌                          |
| `.infuse(v,l)`  | Details Comming soon                                             | ❌                          |
| `.copy(ID)`     | `@save_system` create a save `ID` of the array                   | ✅                          |
| `.paste(ID)`    | `@save_system` load the save `ID` of an array                    | ✅                          |


## Object Methods
The following methods are extended to **Object.prototype**, and can be used like the example below.
> [!TIP]
> `{...}` Brackets need to be added to use Object Methods
```js
bodies:
  main:{
    ...
  }.size(1.5)
```
| Method       | Description                                                                         | Working? (Updated 2025/7/27) |
|--------------|-------------------------------------------------------------------------------------|------------------------------|
| `.reflect()` | Reflects/Reverses the object                                                        | ✅                          |
| `.size(x)`   | Scales the object to the given size `x`                                             | ✅                          |
| `.auto()`    | Bypasses the necessity of declaring properties <br /> (e.g. You can have the `offset` property with only `y` and without `x` and `z`) <br /> The script will generate the properties you omit | ❌                          |

