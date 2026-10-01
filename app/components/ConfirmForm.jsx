"use client";

export default function ConfirmForm({
  action,
  message,
  children,
  className = "",
}) {
  function handleSubmit(event) {
    const yakin = window.confirm(message);

    if (!yakin) {
      event.preventDefault();
    }
  }

  return (
    <form action={action} onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}