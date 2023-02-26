import orderByProps from "../forInFunc";



  test('правильный порядок сортировки 1', () => {
    const char = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      };
    let result = orderByProps(char, ["name", "level"]);
    expect(result).toEqual([
        [ 'name', 'мечник' ],
        [ 'level', 2 ],
        [ 'attack', 80 ],
        [ 'defence', 40 ],
        [ 'health', 10 ]
      ]);
  });

  test('правильный порядок сортировки 2', () => {
    const char = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      };
    let result = orderByProps(char, ["name", "health"]);
    expect(result).toEqual([
        [ 'name', 'мечник' ],
        [ 'health', 10 ],
        [ 'attack', 80 ],
        [ 'defence', 40 ],
        [ 'level', 2 ]
      ]);
  });