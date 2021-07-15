![Exode](https://fontmeme.com/permalink/210712/c072cd76192d267f5d1729b84c1f1642.png)
```css
Note: Exode is currently in .Beta and can sometimes be in maintenance
#DailyUpdates
```

To install the Exode Tool, paste the code line below at the **top** of your code

```coffee
`$.ajax("https://raw.githubusercontent.com/RubyDevil/Exode_OSM/main/Exode.js")
.done(data => eval(data)).fail(err => console.log(err))`
```

# Features

## Custom Editor
Exode allows you to customize your interface as you like. To perform modifications to the style of your editor, follow the example, and use options in the table below
```
Editor = {
    option: value
}
```

| Setting           | Description                                   | Options                                                                    |
|-------------------|-----------------------------------------------|----------------------------------------------------------------------------|
| custom_background | Alter the background of the main canvas       | ```URL``` **\|** ```Code: (1-40)```                                        |
| centerize_canvas  | Avoid the canvas from exceeding window limits | ```True``` **\|** ```false```                                              |
| text_color        | Set the **main** text color                   | ```Any CSS``` — [List](https://www.w3schools.com/colors/colors_groups.asp) |
| italic            | Set the **main** text style to italic         | ```True``` **\|** ```false```                                              |


```markdown
# Copyright
```
