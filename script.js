(function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  function closeItem(item) {
    const content = item.querySelector('.accordion-content');
    const header = item.querySelector('.accordion-header');

    item.classList.remove('is-open');
    content.style.maxHeight = null;
    header.setAttribute('aria-expanded', 'false');
  }

  function openItem(item) {
    const content = item.querySelector('.accordion-content');
    const header = item.querySelector('.accordion-header');

    item.classList.add('is-open');
    content.style.maxHeight = content.scrollHeight + 'px';
    header.setAttribute('aria-expanded', 'true');
  }

  function handleToggle(clickedItem) {
    const isAlreadyOpen = clickedItem.classList.contains('is-open');

    accordionItems.forEach(function (item) {
      closeItem(item);
    });

    if (!isAlreadyOpen) {
      openItem(clickedItem);
    }
  }

  accordionItems.forEach(function (item) {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      handleToggle(item);
    });

    header.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle(item);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const next = item.nextElementSibling;
        if (next) {
          next.querySelector('.accordion-header').focus();
        }
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prev = item.previousElementSibling;
        if (prev) {
          prev.querySelector('.accordion-header').focus();
        }
      }

      if (event.key === 'Home') {
        event.preventDefault();
        accordionItems[0].querySelector('.accordion-header').focus();
      }

      if (event.key === 'End') {
        event.preventDefault();
        accordionItems[accordionItems.length - 1].querySelector('.accordion-header').focus();
      }
    });
  });
})();
