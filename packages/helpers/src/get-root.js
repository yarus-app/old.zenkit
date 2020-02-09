const getRoot = ({ target = 'div', id = '∇', classList = [] } = {}) => {
  let $root = document.getElementById(id);

  if (!$root) {
    $root = document.createElement(target);
    $root.id = id;
    document.body.prepend($root);
  }

  $root.classList.add(id);
  classList.forEach(className => {
    $root.classList.add(className);
  });

  return $root;
}

export default getRoot;
