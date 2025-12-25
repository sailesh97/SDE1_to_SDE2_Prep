### `tabIndex` — what it is and why it matters

`tabIndex` controls **keyboard focus order** and whether an element can be focused using the **Tab key**.

It’s critical for **accessibility (a11y)** and keyboard navigation.

---

## Values and behavior

### `tabIndex={0}` ✅ (most common)

* Makes a non-focusable element focusable
* Follows **natural tab order** (DOM order)

```jsx
<div tabIndex={0}>Focusable</div>
```

**Use when**

* Custom buttons, cards, list items
* Clickable non-semantic elements

---

### `tabIndex={-1}` ✅ (programmatic focus)

* Element is **not tabbable**
* Can be focused via `.focus()`

```jsx
<div tabIndex={-1} ref={ref} />
```

**Use when**

* Focus management (modals, toasts)
* Skip links, error focus
* Accessibility control

---

### `tabIndex={1..n}` ❌ (avoid)

* Overrides natural tab order
* Creates **unpredictable keyboard UX**

```jsx
<div tabIndex={3}>Bad idea</div>
```

**Why it’s bad**

* Breaks screen reader expectations
* Fragile when DOM changes
* Fails accessibility audits

---

## Default browser behavior

| Element    | Default tabIndex     |
| ---------- | -------------------- |
| `<button>` | `0`                  |
| `<a href>` | `0`                  |
| `<input>`  | `0`                  |
| `<div>`    | `-1` (not focusable) |

---

## React vs HTML

* React uses **camelCase**: `tabIndex`
* HTML uses: `tabindex`

```jsx
<div tabIndex={0} />
```

---

## Correct patterns (React)

### Custom button (best practice)

```jsx
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && onClick()}
>
  Click me
</div>
```

✔ Keyboard accessible
✔ Screen-reader friendly

---

### Focus trap (modal example)

```js
ref.current.focus(); // requires tabIndex={-1}
```

---

## `tabIndex` vs better alternatives

| Scenario         | Better option      |
| ---------------- | ------------------ |
| Clickable div    | `<button>`         |
| Navigation       | `<a href>`         |
| List interaction | `<li>` with button |
| UI focus         | `tabIndex={-1}`    |

**Rule of thumb:**

> Use semantic HTML first. Use `tabIndex` only when necessary.

---

## Summary

✔ `0` → tabbable, natural order
✔ `-1` → programmatic focus only
❌ `>0` → accessibility anti-pattern

If you want, I can:

* Audit your component usage
* Explain `tabIndex` in **MUI / ARIA**
* Show focus management for **modals & drawers**
