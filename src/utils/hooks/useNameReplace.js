export const useNameReplace = (currentName, targetName, newName) => {
  const replacedName = currentName === targetName ? newName : currentName;

  return [replacedName];
}