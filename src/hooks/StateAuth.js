import { Store } from "pullstate";
import { loginAPI } from "../api/APIauth";

// deklarasi State Data User
export const UserState = new Store({
  user : {},
  active: false
});

// fungsi untuk login ke API
export async function updateUser({user, pass}) {
  const {respon, isError} = await loginAPI(user, pass)
  if (isError) {
    return false;
  }
  UserState.update((s) => { s.user = respon; s.active = true });
  return respon.role;
}

// deklarasi state Akses Data Menu
export const ConstantMenu = new Store({
  menu : [{id: 1, title: "Lihat Dokumen", icon: "urlIcon", route: 'Draf Dokumen' },
  {id: 2, title: "Riwayat", icon: "urlIcon", route: '/dashboard/riwayat' },
  {id: 3, title: "Verifikasi Dokumen", icon: "urlIcon", route: 'Scanner' },
  {id: 4, title: "Statistik TTE", icon: "urlIcon", route: '/dashboard/statistik' },
  {id: 5, title: "Pengaturan", icon: "urlIcon", route: '/dashboard/pengaturan' },]
})