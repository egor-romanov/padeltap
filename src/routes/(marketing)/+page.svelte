<script lang="ts">
  const features = [
    {
      name: "saves history",
      description:
        "automatically saves your matches after you login. you can view your match history using iPhone or iPad app.",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##58acf2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L14.5 14.5" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.60414 5.60414L5.07381 5.07381V5.07381L5.60414 5.60414ZM4.33776 6.87052L3.58777 6.87429C3.58984 7.28556 3.92272 7.61844 4.33399 7.62051L4.33776 6.87052ZM6.87954 7.6333C7.29375 7.63539 7.63122 7.30129 7.6333 6.88708C7.63538 6.47287 7.30129 6.1354 6.88708 6.13332L6.87954 7.6333ZM5.07496 4.3212C5.07288 3.90699 4.73541 3.5729 4.3212 3.57498C3.90699 3.57706 3.5729 3.91453 3.57498 4.32874L5.07496 4.3212ZM3.82661 10.7849C3.88286 10.3745 3.59578 9.99627 3.1854 9.94002C2.77503 9.88377 2.39675 10.1708 2.3405 10.5812L3.82661 10.7849ZM18.8622 5.13777C15.042 1.31758 8.86873 1.27889 5.07381 5.07381L6.13447 6.13447C9.33358 2.93536 14.5571 2.95395 17.8016 6.19843L18.8622 5.13777ZM5.13777 18.8622C8.95796 22.6824 15.1313 22.7211 18.9262 18.9262L17.8655 17.8655C14.6664 21.0646 9.44291 21.0461 6.19843 17.8016L5.13777 18.8622ZM18.9262 18.9262C22.7211 15.1313 22.6824 8.95796 18.8622 5.13777L17.8016 6.19843C21.0461 9.44291 21.0646 14.6664 17.8655 17.8655L18.9262 18.9262ZM5.07381 5.07381L3.80743 6.34019L4.86809 7.40085L6.13447 6.13447L5.07381 5.07381ZM4.33399 7.62051L6.87954 7.6333L6.88708 6.13332L4.34153 6.12053L4.33399 7.62051ZM5.08775 6.86675L5.07496 4.3212L3.57498 4.32874L3.58777 6.87429L5.08775 6.86675ZM2.3405 10.5812C1.93907 13.5099 2.87392 16.5984 5.13777 18.8622L6.19843 17.8016C4.27785 15.881 3.48663 13.2652 3.82661 10.7849L2.3405 10.5812Z" fill="#58acf2"></path> </g></svg>`,
    },
    {
      name: "gives stats insights",
      description:
        "check out the detailed match statistics to get insights on your performance.",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22H12C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12V2" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.0002 7L15.8821 10.9264C15.4045 11.5278 15.1657 11.8286 14.8916 11.9751C14.47 12.2005 13.9663 12.2114 13.5354 12.0046C13.2551 11.8701 13.0035 11.5801 12.5002 11C11.9968 10.4199 11.7452 10.1299 11.4649 9.99535C11.034 9.78855 10.5303 9.7995 10.1088 10.0248C9.83461 10.1714 9.5958 10.4721 9.11819 11.0735L6 15" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
    },
    {
      name: "tracks who serves",
      description: "never forget who serves next with the serve tracker",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.33995 16.9997C6.10137 21.7826 12.2173 23.4214 17.0002 20.66C18.9498 19.5344 20.377 17.8514 21.1967 15.9286C22.388 13.1341 22.2963 9.83304 20.6605 6.99972C19.0246 4.1664 16.2117 2.43642 13.196 2.07088C11.1209 1.81935 8.94981 2.21386 7.00021 3.33946C2.21728 6.10089 0.578527 12.2168 3.33995 16.9997Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M13.196 2.07129C13.196 2.07129 12.9643 5.67 15.4643 10.0001C17.9643 14.3303 21.1967 15.929 21.1967 15.929M2.80371 8.07129C2.80371 8.07129 6.03613 9.67 8.53613 14.0001C11.0361 18.3303 10.8044 21.929 10.8044 21.929" stroke="#58acf2" stroke-width="1.5"></path> </g></svg>`,
    },
    {
      name: "even in americano tournaments",
      description:
        "use americano mode to track score in friendly tournaments and know the total points.",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 22V13C16 11.5858 16 10.8787 15.5607 10.4393C15.1213 10 14.4142 10 13 10H11C9.58579 10 8.87868 10 8.43934 10.4393C8 10.8787 8 11.5858 8 13V22" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 22C8 20.5858 8 19.8787 7.56066 19.4393C7.12132 19 6.41421 19 5 19C3.58579 19 2.87868 19 2.43934 19.4393C2 19.8787 2 20.5858 2 22" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 22V19C22 17.5858 22 16.8787 21.5607 16.4393C21.1213 16 20.4142 16 19 16C17.5858 16 16.8787 16 16.4393 16.4393C16 16.8787 16 17.5858 16 19V22" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.1459 3.02251C11.5259 2.34084 11.7159 2 12 2C12.2841 2 12.4741 2.34084 12.8541 3.02251L12.9524 3.19887C13.0603 3.39258 13.1143 3.48944 13.1985 3.55334C13.2827 3.61725 13.3875 3.64097 13.5972 3.68841L13.7881 3.73161C14.526 3.89857 14.895 3.98205 14.9828 4.26432C15.0706 4.54659 14.819 4.84072 14.316 5.42898L14.1858 5.58117C14.0429 5.74833 13.9714 5.83191 13.9392 5.93531C13.9071 6.03872 13.9179 6.15023 13.9395 6.37327L13.9592 6.57632C14.0352 7.36118 14.0733 7.75361 13.8435 7.92807C13.6136 8.10252 13.2682 7.94346 12.5773 7.62535L12.3986 7.54305C12.2022 7.45265 12.1041 7.40745 12 7.40745C11.8959 7.40745 11.7978 7.45265 11.6014 7.54305L11.4227 7.62535C10.7318 7.94346 10.3864 8.10252 10.1565 7.92807C9.92674 7.75361 9.96476 7.36118 10.0408 6.57632L10.0605 6.37327C10.0821 6.15023 10.0929 6.03872 10.0608 5.93531C10.0286 5.83191 9.95713 5.74833 9.81418 5.58117L9.68403 5.42898C9.18097 4.84072 8.92945 4.54659 9.01723 4.26432C9.10501 3.98205 9.47396 3.89857 10.2119 3.73161L10.4028 3.68841C10.6125 3.64097 10.7173 3.61725 10.8015 3.55334C10.8857 3.48944 10.9397 3.39258 11.0476 3.19887L11.1459 3.02251Z" stroke="#58acf2" stroke-width="1.5"></path> </g></svg>`,
    },
    {
      name: "shares them with friends",
      description:
        "share live match with friends, or hang your phone or tablet on the fence.",
      planned: "coming in q2",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M5.5 21C3.84315 21 2.5 19.6569 2.5 18C2.5 16.3431 3.84315 15 5.5 15C7.15685 15 8.5 16.3431 8.5 18C8.5 19.6569 7.15685 21 5.5 21Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
    },
    {
      name: "lets you express yourself ",
      description:
        "customize your appearance with animated avatars, colors, and more.",
      planned: "coming in q3",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.0993 10.6602C20.2113 11.9744 19.98 13.5815 19.9801 15C19.9801 18.9062 14.7132 20 12 20C9.28677 20 4.01994 18.9062 4.01994 15C4.01995 13.5815 3.78875 11.9744 4.90066 10.6602M19.0993 10.6602C18.9048 10.4303 18.6692 10.2094 18.384 10M19.0993 10.6602C19.7993 11.0634 19.9781 9.55469 19.9801 9.0625V7.18761C19.9801 5.56261 18.8629 5.00011 17.9053 5.00011C16.9477 5.00011 15.0324 6.5625 14.394 6.5625C13.6279 6.5625 13.4804 6.40636 12 6.40636C10.5197 6.40636 10.3721 6.5625 9.60601 6.5625C8.9676 6.5625 7.05236 5 6.09476 5C5.13715 5 4.01995 5.5625 4.01995 7.1875V9.0625C4.02188 9.55469 4.20072 11.0634 4.90066 10.6602M4.90066 10.6602C5.09519 10.4303 5.33082 10.2094 5.61599 10" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12.8258 16C12.8258 16.1726 12.4647 16.3125 12.0193 16.3125C11.574 16.3125 11.2129 16.1726 11.2129 16C11.2129 15.8274 11.574 15.6875 12.0193 15.6875C12.4647 15.6875 12.8258 15.8274 12.8258 16Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M15.5 13.5938C15.5 14.0252 15.2834 14.375 15.0161 14.375C14.7489 14.375 14.5323 14.0252 14.5323 13.5938C14.5323 13.1623 14.7489 12.8125 15.0161 12.8125C15.2834 12.8125 15.5 13.1623 15.5 13.5938Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M9.5 13.5938C9.5 14.0252 9.28336 14.375 9.01613 14.375C8.74889 14.375 8.53226 14.0252 8.53226 13.5938C8.53226 13.1623 8.74889 12.8125 9.01613 12.8125C9.28336 12.8125 9.5 13.1623 9.5 13.5938Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M22.0004 15.4688C21.5165 15.1562 19.4197 14.375 18.6133 14.375" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20.3871 17.9688C19.9033 17.6562 18.7742 16.875 17.9678 16.875" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 15.4688C2.48387 15.1562 4.58065 14.375 5.3871 14.375" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3.61279 17.9688C4.09667 17.6562 5.2257 16.875 6.03215 16.875" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
    },
    {
      name: "builds community",
      description:
        "be a part of the community and build the best platform for padel players with us.",
      planned: "coming in q3",
      svgContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="#58acf2" stroke-width="1.5"></path> <path d="M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM5.81062 11.5605L7.98592 12.2856L8.46026 10.8626L6.28497 10.1375L5.81062 11.5605ZM8.31681 12.9868L7.07002 16.2284L8.47004 16.7669L9.71683 13.5252L8.31681 12.9868ZM17.715 10.1375L15.5397 10.8626L16.0141 12.2856L18.1894 11.5605L17.715 10.1375ZM14.2832 13.5252L15.53 16.7669L16.93 16.2284L15.6832 12.9868L14.2832 13.5252ZM11.0754 18.1295L12.6512 15.3718L11.3488 14.6276L9.77299 17.3853L11.0754 18.1295ZM16.9894 7.16355L15.0918 7.57017L15.4061 9.03688L17.3037 8.63026L16.9894 7.16355ZM8.90817 7.57018L7.0106 7.16355L6.69631 8.63026L8.59387 9.03688L8.90817 7.57018ZM11.3488 15.3718L12.9246 18.1295L14.227 17.3853L12.6512 14.6276L11.3488 15.3718ZM15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.0918 7.57017ZM8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.59387 9.03688ZM14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L14.8865 7.61381ZM9.14506 19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V19.2497ZM15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L15.53 16.7669ZM15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.5397 10.8626ZM15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L15.6832 12.9868ZM14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L14.8898 11.1283ZM18.25 9.39526C18.25 9.73202 18.0345 10.031 17.715 10.1375L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H18.25ZM7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.07002 16.2284ZM7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L7.98592 12.2856ZM9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.71683 13.5252ZM8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.3223 12.4048ZM4.25 9.39526C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H4.25ZM5.75 9.39526C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5.75ZM12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L12.9246 18.1295ZM19.75 9.39526C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19.75Z" fill="#58acf2"></path> <path d="M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5" stroke="#58acf2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
    },
  ]

  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>{PUBLIC_SITE_NAME}</title>
  <meta name="description" content="{PUBLIC_SITE_NAME} Home Page" />
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
      >
        padeltap
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        this app counts score
      </div>
      <div class="mt-6 md:mt-5 text-sm md:text-lg text-neutral-content">
        iOS and watchOS app for counting score in padel matches.
      </div>
      <div
        class="mt-6 md:mt-5 text-sm md:text-lg justify-center hidden sm:inline-flex"
      >
        <img src="/images/qr.svg" width="256px" alt="QR code" />
      </div>
      <div class="inline-flex sm:hidden justify-center">
        <div class="w-1/2">
          <img
            src="/images/watch.png"
            class="w-full h-full object-contain"
            alt="Apple Watch app"
          />
        </div>
        <div class="w-1/3">
          <img
            src="/images/iphone.png"
            class="w-full h-full object-contain"
            alt="iPhone app"
          />
        </div>
      </div>
      <div class="mt-6 md:mt-2">
        <a
          href="https://apps.apple.com/us/app/padeltap/id6476618933"
          class="inline-flex justify-center"
        >
          <object
            data="/images/appstore.svg"
            type="image/svg+xml"
            style="pointer-events: none;"
            title="App Store link"
          ></object>
        </a>
      </div>
      <!-- place absolutely positioned images of an app from the left and right sides of the page -->
      <div class="invisible sm:visible">
        <div
          class="absolute right-2 bottom-20 md:bottom-0 w-1/3 md:w-1/4 -z-10"
        >
          <img
            src="/images/iphone.png"
            class="w-full h-full object-contain"
            alt="iPhone app"
          />
        </div>
        <div class="absolute left-2 bottom-20 md:bottom-0 w-1/2 md:w-2/5 -z-20">
          <img
            src="/images/watch.png"
            class="w-full h-full object-contain"
            alt="Apple Watch app"
          />
        </div>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        explore the features
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div
          class="card w-[270px] min-h-[300px] flex-none shadow-xl card-bordered"
        >
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.planned}
              <button
                class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px] disabled"
                >{feature.planned}</button
              >
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<!-- extra cta -->
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-4"
      >
        start counting
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="">
          <div class="flex justify-center">
            <img
              alt="Screenshot of to be released app"
              src="/images/app.png"
              class="min-w-[200px] max-w-[240px] object-contain"
            />
          </div>
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              never forget the score again, use padeltap for <span
                class="underline decoration-secondary decoration-[3px]"
                >counting</span
              >
              padel tennis
              <span class="underline decoration-secondary decoration-[3px]"
                >score</span
              >
              during matches and
              <span class="underline decoration-secondary decoration-[3px]"
                >tracking history</span
              > of your matches with detailed stats.
            </div>
            <div class="mt-4 text-large">
              <a
                href="https://apps.apple.com/us/app/padeltap/id6476618933"
                target="_blank"
              >
                <button class="btn btn-primary btn-wide mt-3">download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .card-bordered {
    background-color: #051522;
    max-width: 80%;
    padding: 1rem;
    position: relative;
    /* color: white; */
    border-radius: 8px;
  }

  .card-bordered:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    z-index: -1;
    border-radius: 12px;
    background: linear-gradient(
      130deg,
      #65db7c,
      #58acf2 41.07%,
      #65db7c 76.05%
    );
  }
</style>
