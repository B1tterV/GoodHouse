<script setup lang="ts">
// Icons
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseRadio from '~/components/common/BaseRadio.vue';
import CartProduct from '~/components/cards/CartProduct.vue';

const firstName = ref<string>('')
const lastName = ref<string>('')
const middleName = ref<string>('')
const phone = ref<string>('')
const email = ref<string>('')
const company = ref<string>('')
const inn = ref<string>('')

const address = ref<string>('')
const home = ref<string>('')
const homeNumber = ref<string>('')
const homeCode = ref<string>('')

const paymnetTypes = [
  { label: "Безналичный расчет с НДС", value: "no_nds" },
]
const payment = ref(paymnetTypes[0].value)

const sidebarInfo = ref([
  { name: "1 товар", value: "136.6 кг" },
  { name: "Оплата", value: "Картой онлайн" },
  { name: "Доставка", value: "Самовывоз" },
  { name: "Итого", value: "1 299₽" }
])

const deliveryTypes = [
  { label: "На адрес", value: "address" },
  { label: "Самовывоз", value: "pickup" },
]
const delivery = ref(deliveryTypes[0].value)
const isPickup = computed(() => delivery.value === 'pickup')

const contactsTypes = [
  { label: "Физлицо", value: "individual" },
  { label: "Юрлицо", value: "legal" },
]
const contact = ref(contactsTypes[0].value)
const isIndividual = computed(() => contact.value === 'individual')

const cartProducts = [
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285731,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285732,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285733,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285734,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285735,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285736,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  }
]
</script>

<template>
    <div class="checkout-page wrapper">
        <div class="checkout-page__content">
            <div class="order-structure">
                <div class="title">Состав заказа</div>
                <div class="order-structure__products">
                    <CartProduct
                        v-for="(cartProduct, cartProductIndex) in cartProducts"
                        :key="`cartProduct-${cartProductIndex}`"
                        :image="cartProduct.image"
                        :article="cartProduct.code"
                        :name="cartProduct.description"
                        :oldPrice="cartProduct.prevPrice"
                        :currentPrice="cartProduct.currentPrice"
                        :tag="cartProduct.tag"
                    />
                </div>
            </div>
            <div class="making-order">
                <div class="title">Оформление заказа</div>
                <div class="data-block">
                    <div class="data-block__title">Контактные данные</div>
                    <div class="data-block__type">
                        <BaseRadio
                            v-for="(contactsType, contactsTypeIndex) in contactsTypes"
                            :key="`paymnetType-${contactsTypeIndex}`"
                            v-model="contact"
                            :label="contactsType.label"
                            :value="contactsType.value"
                            name="contact"
                        />
                    </div>
                    <div class="data-block__form">
                        <BaseInput v-model="firstName" name="Имя" placeholder="Иван" />
                        <BaseInput v-model="lastName" name="Фамилия" placeholder="Иванов" />
                        <BaseInput v-model="middleName" name="Отчество" placeholder="Иванович" />
                        <BaseInput v-model="phone" name="Телефон" placeholder="+7-900-123-45-67" />
                        <BaseInput v-model="email" name="Почта" placeholder="yourpost@mail.ru" />
                        <BaseInput v-if="!isIndividual" v-model="company" name="Компания" placeholder="ИП Иванов" />
                        <BaseInput v-if="!isIndividual" v-model="inn" name="ИНН" placeholder="726256373" />
                    </div>
                </div>
                <div class="data-block">
                    <div class="data-block__title">Доставка</div>
                    <div class="data-block__type">
                        <BaseRadio
                            v-for="(deliveryType, deliveryTypeIndex) in deliveryTypes"
                            :key="`paymnetType-${deliveryTypeIndex}`"
                            v-model="delivery"
                            :label="deliveryType.label"
                            :value="deliveryType.value"
                            name="delivery"
                        />
                    </div>
                    <div v-if="!isPickup" class="data-block__form">
                        <BaseInput v-model="address" name="Адрес" placeholder="Казань, ул. Филатова" />
                        <BaseInput v-model="home" name="Дом" placeholder="12" />
                        <BaseInput v-model="homeNumber" name="Кв/офис" placeholder="123" />
                        <BaseInput v-model="homeCode" name="Домофон" placeholder="1234" />
                    </div>
                    <div v-if="!isPickup" class="data-block__description">
                        Выберите адрес и способ выгрузки.
                        Стоимость доставки будет рассчитана
                        менеджером и согласована с вами при подтверждении заказа
                    </div>
                </div>
                <div class="data-block">
                    <div class="data-block__title">Оплата</div>
                    <div class="data-block__type">
                        <BaseRadio
                            v-for="(paymnetType, paymnetTypeIndex) in paymnetTypes"
                            :key="`paymnetType-${paymnetTypeIndex}`"
                            v-model="payment"
                            :label="paymnetType.label"
                            :value="paymnetType.value"
                            name="payment"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout-page__sidebar">
            <div class="sidebar-card sidebar-card__go-back">
                <ArrowLeftIcon filled/>
                Назад в корзину
            </div>
            <div class="sidebar-card sidebar-card__pay-info">
                <div class="info">
                    <div
                        v-for="(info, infoIndex) in sidebarInfo"
                        :key="`info-${infoIndex}`"
                        class="info__item"
                    >
                        <div class="name">{{ info.name }}</div>
                        <div class="line"/>
                        <div class="value">{{ info.value }}</div>
                    </div>
                </div>
                <div class="description">
                    Нажимая кнопку Оформить заказ, вы соглашаетесь с условиями обработки <nuxt-link to="#">персональных данных</nuxt-link>
                </div>
                <BaseButton color="red" text="Оформить заказ" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.checkout-page{
    display: flex;
    gap: 32px;
    padding-top: 60px;
    padding-bottom: 60px;
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
    &__content{
        flex: 1;
        .title{
            @include UI-24-30-400;
            margin-bottom: 24px;
        }
        .order-structure{
            margin-bottom: 24px;
            &__products{
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }
        .making-order{
            display: flex;
            flex-direction: column;
            gap: 24px;

            .title{
                margin-bottom: 0;
            }

            .data-block{
                display: flex;
                flex-direction: column;
                gap: 24px;
                background: $block-gray;
                border-radius: 16px;
                padding: 24px;
                &__title{
                    @include UI-20-100p-400;
                }
                &__type{
                    display: flex;
                    gap: 48px;
                    flex-wrap: wrap;
                }
                &__form{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                &__description{
                    @include UI-18-24-400;
                    max-width: 470px;
                }
            }
        }
    }
    &__sidebar{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 377px;
        .sidebar-card{
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            padding: 20px 16px;
            background: $block-light;

            &__go-back {
                @include UI-18-24-400;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            &__pay-info{
                .info{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 24px;
                    &__item{
                        display: flex;
                        align-items: end;
                        width: 100%;
                        gap: 8px;
    
                        .name{
                            @include UI-18-24-400;
                            color: $text-secondary;
                        }
    
                        .line{
                            border-bottom: 1px dashed $text-secondary;
                            margin-bottom: 6px;
                            flex: 1;
                        }
    
                        .value {
                            @include UI-18-24-400;
                            max-width: 80%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
                .description{
                    @include UI-16-20-500;
                    margin-bottom: 24px;
                    color: $text-primary-opacity;

                    a {
                        color: $text-link;
                        text-decoration: none;
                    }
                }
                :deep(.base-button) {
                    @include UI-16-20-500;
                    width: 100%;
                }
            }
        }
    }
}
</style>