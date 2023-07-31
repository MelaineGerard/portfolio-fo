<template>
  <nav>
    <a class="website-name" href="#">Melaine Gérard</a>
    <ul>
      <li>
        <a href="#">
          Accueil
        </a>
      </li>
      <li>
        <a href="#">
          Projets
        </a>
      </li>
      <li>
        <a href="#">
          Expériences professionnelles
        </a>
      </li>
      <li>
        <a href="#">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #e7e7e7;
    padding: 0.25rem 1rem;

    ul {
      display: flex;
      list-style: none;

      li {
        margin-left: 1rem;

        a {
          text-decoration: none;
          color: #000;
          transition: all 0.2s ease-in-out;
          font-size: 1.2rem;

          &:hover {
            color: #0053a7;
          }
        }
      }
    }

    .website-name {
      font-weight: bold;
      font-size: 1.7rem;
      text-decoration: none;
      color: #000;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 0.5rem 0;

      ul {
        flex-direction: column;
        text-align: center;

        li {
          margin: 0.5rem 0;
        }
      }

      .website-name {
        text-align: center;
      }
    }
  }
</style>