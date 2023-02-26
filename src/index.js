import orderByProps from "../forInFunc";


    const char = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      };
    let result = orderByProps(char, ["name", "level"]);
    console.log(result);