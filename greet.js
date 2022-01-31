export function greet(name = 'stranger') {
  if (name === 'Mareike' || name === 'Jerry' || name === 'Paul') {
    return 'Hello Coach!';
  } else {
    return 'Hello ' + name + '!';
  }
}
